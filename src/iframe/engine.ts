import Voronoi, {type Cell, type Diagram, type Edge} from 'voronoi'
import {
  paletteBlack,
  paletteBlack2,
  paletteBlack3,
  paletteWhite
} from '../shared/palette.ts'

const w = 288
const h = 320

type Facet = {
  cell: Cell
  edges: Facet[]
  /** true if the target mineral, false if the host matrix. */
  specimen: boolean
  state: 'Invisible' | 'Solid' | 'Cracked' | 'Chipped' | 'Shattered'
}

function facetHammer(facet: Facet): void {
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

export class Engine {
  static async new(): Promise<Engine> {
    return new Engine()
  }

  readonly #facets: Facet[]
  readonly #canvas: HTMLCanvasElement
  #x: number = 0
  #y: number = 0

  #bg: CanvasPattern
  #patterns: CanvasPattern[] = []

  constructor() {
    this.#canvas = document.querySelector('canvas')!
    this.#bg = newPattern(
      this.#canvas.getContext('2d')!,
      6,
      130,
      paletteBlack2,
      1
    )!
    for (let i = 0; i < 32; i++) {
      this.#patterns.push(
        newPattern(
          this.#canvas.getContext('2d')!,
          6 + Math.random() * 12,
          Math.random() * 360,
          paletteBlack,
          1 + Math.random() * 2
        )!
      )
    }
    this.#canvas.width = innerWidth
    this.#canvas.height = innerHeight
    this.#facets = newFacets(w, h)
    this.#draw()
  }

  start(): void {
    addEventListener('pointermove', ev => {
      this.#x = ev.x
      this.#y = ev.y
    })

    requestAnimationFrame(() => this.#loop())

    addEventListener('pointerdown', ev => {
      const sx = innerWidth / w
      const sy = innerHeight / h
      const facet = this.#facetAtXY(ev.x / sx, ev.y / sy)
      if (facet) facetHammer(facet)
    })
  }

  #loop(): void {
    this.#draw()
    requestAnimationFrame(() => this.#loop())
  }

  #facetAtXY(x: number, y: number): Facet | undefined {
    return facetAtXY(this.#facets, x, y)
  }

  #drawFacet(
    facet: Readonly<Facet>,
    fillStyle: string | CanvasPattern,
    strokeStyle: string
  ): void {
    if (facet.state === 'Invisible') return

    const ctx = this.#canvas.getContext('2d')
    if (!ctx) return

    const sx = innerWidth / w
    const sy = innerHeight / h

    ctx.beginPath()
    const halfedges = facet.cell.halfedges
    const nHalfedges = halfedges.length
    let v = halfedges[0]!.getStartpoint()
    ctx.moveTo(sx * v.x, sy * v.y)
    for (let iHalfedge = 0; iHalfedge < nHalfedges; iHalfedge++) {
      v = halfedges[iHalfedge]!.getEndpoint()
      ctx.lineTo(sx * v.x, sy * v.y)
    }
    switch (facet.state) {
      case 'Solid':
        ctx.fillStyle = fillStyle
        break
      case 'Cracked':
        ctx.fillStyle = facet.specimen
          ? paletteBlack
          : this.#patterns[facet.cell.site.voronoiId % this.#patterns.length]!
        break
      case 'Chipped':
        ctx.fillStyle = paletteBlack2
        break
      case 'Shattered':
        ctx.fillStyle = paletteBlack3
        break
      default:
        facet.state satisfies never
    }
    ctx.lineWidth = 3
    ctx.strokeStyle = paletteBlack2
    ctx.fill()
    if (facet.state === 'Cracked') ctx.stroke()
  }

  #draw(): void {
    const ctx = this.#canvas.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
    ctx.rect(0, 0, this.#canvas.width, this.#canvas.height)
    ctx.fillStyle = paletteWhite
    ctx.fill()
    ctx.fillStyle = this.#bg
    ctx.fill()

    const sx = innerWidth / w
    const sy = innerHeight / h

    const clicked = this.#facetAtXY(this.#x / sx, this.#y / sy)

    ctx.save()
    // ctx.scale(sx, sy)

    for (const facet of this.#facets)
      this.#drawFacet(
        facet,
        facet === clicked ? 'red' : paletteWhite,
        paletteBlack
      )

    ctx.restore()
  }
}

function newPattern(
  dstC2D: CanvasRenderingContext2D,
  spacing: number,
  degrees: number,
  style: string,
  width: number
): CanvasPattern | undefined {
  const rads = (degrees * Math.PI) / 180
  const sin = Math.abs(Math.sin(rads))
  const cos = Math.abs(Math.cos(rads))

  const tileW = sin > 0.01 ? spacing / sin : spacing
  const tileH = cos > 0.01 ? spacing / cos : spacing

  const tile9Canvas = document.createElement('canvas')
  tile9Canvas.width = tileW * 3
  tile9Canvas.height = tileH * 3

  const tile9C2D = tile9Canvas.getContext('2d')
  if (!tile9C2D) return

  tile9C2D.rect(0, 0, tile9Canvas.width, tile9Canvas.height)
  tile9C2D.fillStyle = paletteWhite
  tile9C2D.fill()

  tile9C2D.save()
  tile9C2D.translate(tile9Canvas.width / 2, tile9Canvas.height / 2)
  tile9C2D.rotate(rads)

  const diagonal = Math.sqrt(
    tile9Canvas.width * tile9Canvas.width +
      tile9Canvas.height * tile9Canvas.height
  )
  const lineCount = 1 + Math.trunc(diagonal / spacing)

  tile9C2D.beginPath()
  for (let i = -lineCount; i < 2 * lineCount; i++) {
    const y = i * spacing
    tile9C2D.moveTo(-diagonal, y)
    tile9C2D.lineTo(diagonal, y)
  }
  tile9C2D.strokeStyle = style
  tile9C2D.lineWidth = width
  tile9C2D.lineCap = 'butt'
  tile9C2D.stroke()

  tile9C2D.restore()

  const tileCanvas = document.createElement('canvas')
  tileCanvas.width = tileW
  tileCanvas.height = tileH

  const tileCtx = tileCanvas.getContext('2d')
  if (!tileCtx) return

  tileCtx.drawImage(tile9Canvas, tileW, tileH, tileW, tileH, 0, 0, tileW, tileH)

  return dstC2D.createPattern(tileCanvas, 'repeat') ?? undefined
}

function newFacets(w: number, h: number): Facet[] {
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

function facetAtXY(
  facets: readonly Readonly<Facet>[],
  x: number,
  y: number
): Facet | undefined {
  return facets.find(facet => facet.cell.pointIntersection(x, y) > 0)
}
