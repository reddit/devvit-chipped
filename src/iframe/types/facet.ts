import type {Cell} from 'voronoi'
import Voronoi from 'voronoi'
import {minCanvasWH} from '../../shared/theme.ts'
import type {Random} from '../../shared/types/random.ts'

export type Facet = {
  area: number
  cell: Cell
  edges: Facet[]
  /** true if the target mineral, false if the host matrix. */
  specimen: boolean
  state: FacetState
}

export type FacetState =
  | 'Invisible'
  | 'Solid'
  | 'Cracked'
  | 'Chipped'
  | 'Shattered'

export function newFacets(rnd: Random): Facet[] {
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
    const i = Math.trunc(rnd.num * facets.length)
    const facet = facets[i]!
    if (facet.state === 'Invisible') continue

    const skipPerimeter = facet.edges.some(edge => {
      if (facets[edge.cell.site.voronoiId]!.state === 'Invisible')
        return rnd.num < 0.8
    })
    if (skipPerimeter) continue

    facet.specimen = true
    break
  }
  return facets
}

const kaputState: {readonly [state in Facet['state']]: boolean} = {
  Invisible: true,
  Solid: false,
  Cracked: false,
  Chipped: true,
  Shattered: true
}

export function facetKaput(facet: Readonly<Facet>): boolean {
  return kaputState[facet.state]
}

export function facetHitable(facet: Facet): boolean {
  return (
    !kaputState[facet.state] && facet.edges.some(edge => kaputState[edge.state])
  )
}

export function facetHammer(facet: Facet): void {
  switch (facet.state) {
    case 'Invisible':
      break
    case 'Solid': {
      if (facetHitable(facet)) facet.state = 'Cracked'
      break
    }
    case 'Cracked': {
      const smallest = facet.edges.every(
        edge => kaputState[edge.state] || facet.area < edge.area
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

function facetAtXY(
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
