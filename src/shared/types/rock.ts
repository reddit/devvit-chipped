import type {Cell} from 'voronoi'
import Voronoi from 'voronoi'
import {minCanvasWH, paletteBlack, thickStroke} from '../theme.ts'
import type {XY} from './2d.ts'
import type {IMA} from './ima.ts'
import type {Random, Seed} from './random.ts'

export type Chip = {
  cell: Cell
  area: number
  edges: Chip[]
  /** true if the target mineral, false if the host matrix. */
  specimen: boolean
  state: ChipState
}

export type ChipState =
  | 'Invisible'
  | 'Solid'
  | 'Cracked'
  | 'Chipped'
  | 'Shattered'

export type Rock = {
  area: number
  chips: Chip[]
  poly: XY[][]
  seed: {ima: IMA; seed: Seed}
  svg: string
}

const chipStateStatic: {readonly [state in ChipState]: boolean} = {
  Invisible: true,
  Solid: false,
  Cracked: false,
  Chipped: true,
  Shattered: true
}

export function Rock(rnd: Random, ima: IMA): Rock {
  const seed = rnd.seed
  const voronoi = new Voronoi()
  const sites = []
  // to-do: const ez = 60, medium = 100, hard = 500, hardest = 1500
  for (let i = 0; i < 60; i++) {
    sites.push({
      x: Math.round(minCanvasWH.w * rnd.num),
      y: Math.round(minCanvasWH.h * rnd.num)
    })
  }

  const box = {xl: 0, xr: minCanvasWH.w, yb: minCanvasWH.h, yt: 0}
  const diagram = voronoi.compute(sites, box)
  const chips: Chip[] = diagram.cells.map(cell => ({
    area: cellArea(cell),
    cell,
    edges: [],
    specimen: false,
    state: 'Solid'
  }))
  for (const edge of diagram.edges) {
    if (!edge.rSite) continue
    chips[edge.lSite.voronoiId]!.edges.push(chips[edge.rSite.voronoiId]!)
    chips[edge.rSite.voronoiId]!.edges.push(chips[edge.lSite.voronoiId]!)
  }
  // hack: chips don't seem to intersect at 0.
  for (let x = box.xl; x < box.xr; x++)
    if (x === 1 || x === box.xr - 1)
      for (let y = box.yt; y < box.yb; y++) {
        const chip = chipAtXY(chips, x, y)
        if (chip) chip.state = 'Invisible'
      }
    else {
      {
        const chip = chipAtXY(chips, x, 1)
        if (chip) chip.state = 'Invisible'
      }
      const chip = chipAtXY(chips, x, box.yb - 1)
      if (chip) chip.state = 'Invisible'
    }
  for (;;) {
    const i = Math.trunc(rnd.num * chips.length)
    const chip = chips[i]!
    if (chip.state === 'Invisible') continue

    const skipPerimeter = chip.edges.some(edge => {
      if (chips[edge.cell.site.voronoiId]!.state === 'Invisible')
        return rnd.num < 0.8
    })
    if (skipPerimeter) continue

    chip.specimen = true
    break
  }

  // to-do: component terminology?
  const edges = diagram.edges
    .filter(
      edge =>
        (chips[edge.lSite.voronoiId]!.state === 'Invisible' ||
          edge.rSite == null ||
          chips[edge.rSite.voronoiId]!.state === 'Invisible') &&
        (chips[edge.lSite.voronoiId]!.state !== 'Invisible' ||
          (edge.rSite && chips[edge.rSite.voronoiId]!.state !== 'Invisible'))
    )
    .map(edge => [
      {x: edge.va.x, y: edge.va.y},
      {x: edge.vb.x, y: edge.vb.y}
    ])

  const area = chips.reduce(
    (sum, chip) => sum + (chipIsStatic(chip) ? 0 : chip.area),
    0
  )

  return {area, chips, poly: edges, seed: {ima, seed}, svg: newRockSVG(edges)}
}

export function chipIsStatic(chip: Readonly<Chip>): boolean {
  return chipStateStatic[chip.state]
}

export function chipHitable(chip: Readonly<Chip>): boolean {
  return !chipIsStatic(chip) && chip.edges.some(edge => chipIsStatic(edge))
}

export function chipHit(chip: Chip): void {
  switch (chip.state) {
    case 'Invisible':
      break
    case 'Solid': {
      if (chipHitable(chip)) chip.state = 'Cracked'
      break
    }
    case 'Cracked': {
      const smallest = chip.edges.every(
        edge => chipIsStatic(edge) || chip.area < edge.area
      )
      if (smallest) chip.state = 'Chipped'
      else {
        chip.state = 'Shattered'
        for (const edge of chip.edges) {
          if (chipIsStatic(edge)) continue
          edge.state = 'Shattered'
        }
      }
      break
    }
    case 'Chipped':
      break
    case 'Shattered':
      break
    default:
      chip.state satisfies never
  }
}

function chipAtXY(
  chips: readonly Readonly<Chip>[],
  x: number,
  y: number
): Chip | undefined {
  return chips.find(chip => chip.cell.pointIntersection(x, y) > 0)
}

/** @internal */
export function cellArea(cell: Readonly<Cell>): number {
  let area = 0

  let prev = cell.halfedges[0]!.getStartpoint()
  for (const half of cell.halfedges) {
    const xy = half.getEndpoint()
    area += prev.x * xy.y - prev.y * xy.x
    prev = xy
  }

  return Math.abs(area) / 2
}

function newRockSVG(edges: readonly (readonly Readonly<XY>[])[]): string {
  const paths = edges
    .map(edge => {
      const path = edge
        .map(({x, y}, index) => (index ? `L${x},${y}` : `M${x},${y}`))
        .join(' ')
      return `<path d="${path}" stroke="${paletteBlack}" stroke-linecap="round"  stroke-width="${thickStroke / 2}" />`
    })
    .join('')
  return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${minCanvasWH.w} ${minCanvasWH.h}">${paths}</svg>`
}
