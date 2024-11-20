import type {Cell} from 'voronoi'
import Voronoi from 'voronoi'
import {
  paletteBlack,
  paletteBlack2,
  paletteBlack3,
  paletteWhite
} from '../shared/palette.ts'
import {levelWH} from './level.ts'

export type Facet = {
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
  const nHalfedges = halfedges.length
  let v = halfedges[0]!.getStartpoint()
  c2d.moveTo(sx * v.x, sy * v.y)
  for (let iHalfedge = 0; iHalfedge < nHalfedges; iHalfedge++) {
    v = halfedges[iHalfedge]!.getEndpoint()
    c2d.lineTo(sx * v.x, sy * v.y)
  }
  switch (facet.state) {
    case 'Solid':
      c2d.fillStyle = facet === pointed ? 'red' : paletteWhite
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

export function facetHammer(facet: Facet): void {
  switch (facet.state) {
    case 'Invisible':
      break
    case 'Solid':
      facet.state = 'Cracked'
      break
    case 'Cracked':
      facet.state = 'Chipped'
      break
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
