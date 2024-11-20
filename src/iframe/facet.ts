import type {Cell} from 'voronoi'
import Voronoi from 'voronoi'
import {
  paletteBlack,
  paletteBlack2,
  paletteBlack3,
  paletteWhite,
  paletteWhitest
} from '../shared/palette.ts'
import {levelWH} from './level.ts'

export type Facet = {
  area: number
  cell: Cell
  edges: Facet[]
  /** true if the target mineral, false if the host matrix. */
  specimen: boolean
  state: 'Invisible' | 'Solid' | 'Cracked' | 'Chipped' | 'Shattered'
}

export function newFacets(w: number, h: number): Facet[] {
  const voronoi = new Voronoi()
  const sites = []
  for (let i = 0; i < 100; i++) {
    sites.push({
      x: Math.round(w * Math.random()),
      y: Math.round(h * Math.random())
    })
  }

  const box = {xl: 0, xr: w, yb: h, yt: 0}
  const diagram = voronoi.compute(sites, box)
  const facets: Facet[] = diagram.cells.map(cell => ({
    area: cellArea(cell),
    cell,
    edges: [],
    specimen: false,
    state: 'Solid'
  }))
  for (const edge of diagram.edges) {
    if (!edge.rSite) continue
    facets[edge.lSite.voronoiId]!.edges.push(facets[edge.rSite.voronoiId]!)
    facets[edge.rSite.voronoiId]!.edges.push(facets[edge.lSite.voronoiId]!)
  }
  for (let x = box.xl; x < box.xr; x++)
    if (x === 1 || x === box.xr - 1)
      for (let y = box.yt; y < box.yb; y++) {
        const facet = facetAtXY(facets, x, y)
        if (facet) facet.state = 'Invisible'
      }
    else {
      {
        const facet = facetAtXY(facets, x, 1)
        if (facet) facet.state = 'Invisible'
      }
      const facet = facetAtXY(facets, x, box.yb - 1)
      if (facet) facet.state = 'Invisible'
    }
  for (;;) {
    const i = Math.trunc(Math.random() * facets.length)
    const facet = facets[i]!
    if (facet.state === 'Invisible') continue

    const skipPerimeter = facet.edges.some(edge => {
      if (facets[edge.cell.site.voronoiId]!.state === 'Invisible')
        return Math.random() < 0.8
    })
    if (skipPerimeter) continue

    facet.specimen = true
    break
  }
  return facets
}

export function facetDraw(
  facet: Readonly<Facet>,
  c2d: CanvasRenderingContext2D,
  patterns: readonly CanvasPattern[],
  pointed: Facet | undefined
): void {
  if (facet.state === 'Invisible') return

  const sx = innerWidth / levelWH.w
  const sy = innerHeight / levelWH.h

  c2d.beginPath()
  const halfedges = facet.cell.halfedges
  let v = halfedges[0]!.getStartpoint()
  c2d.moveTo(sx * v.x, sy * v.y)
  for (let iHalfedge = 0; iHalfedge < halfedges.length; iHalfedge++) {
    v = halfedges[iHalfedge]!.getEndpoint()
    c2d.lineTo(sx * v.x, sy * v.y)
  }
  switch (facet.state) {
    case 'Solid':
      c2d.fillStyle = facet === pointed ? paletteWhitest : paletteWhite
      break
    case 'Cracked':
      c2d.fillStyle = facet.specimen
        ? paletteBlack
        : patterns[facet.cell.site.voronoiId % patterns.length]!
      break
    case 'Chipped':
      c2d.fillStyle = paletteBlack2
      break
    case 'Shattered':
      c2d.fillStyle = paletteBlack3
      break
    default:
      facet.state satisfies never
  }
  c2d.lineWidth = 3
  c2d.strokeStyle = paletteBlack2
  c2d.fill()
  if (facet.state === 'Cracked') c2d.stroke()
}

const kaputState: {readonly [state in Facet['state']]: boolean} = {
  Invisible: true,
  Solid: false,
  Cracked: false,
  Chipped: true,
  Shattered: true
}

export function facetHammer(facet: Facet): void {
  switch (facet.state) {
    case 'Invisible':
      break
    case 'Solid': {
      const exposed = facet.edges.some(edge => kaputState[edge.state])
      if (exposed) facet.state = 'Cracked'
      break
    }
    case 'Cracked': {
      const smallest = facet.edges.every(
        edge => kaputState[edge.state] || edge.area >= facet.area
      )
      if (smallest) facet.state = 'Chipped'
      else {
        facet.state = 'Shattered'
        for (const edge of facet.edges) {
          if (kaputState[edge.state]) continue
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
      facet.state satisfies never
  }
}

export function facetAtXY(
  facets: readonly Readonly<Facet>[],
  x: number,
  y: number
): Facet | undefined {
  return facets.find(facet => facet.cell.pointIntersection(x, y) > 0)
}

function cellArea(cell: Readonly<Cell>): number {
  let area = 0

  let v = cell.halfedges[0]!.getStartpoint()
  for (let iHalfedge = 0; iHalfedge < cell.halfedges.length; iHalfedge++) {
    const next = cell.halfedges[iHalfedge]!.getEndpoint()
    area += v.x * next.y - v.y * next.x
    v = next
  }

  return Math.abs(area) / 2
}
