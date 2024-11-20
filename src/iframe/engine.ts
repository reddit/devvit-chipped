import {paletteBlack, paletteBlack2, paletteWhite} from '../shared/palette.ts'
import {
  type Facet,
  facetAtXY,
  facetDraw,
  facetHammer,
  newFacets
} from './facet.ts'
import {levelWH} from './level.ts'

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
    this.#facets = newFacets(levelWH.w, levelWH.h)
    this.#draw()
  }

  start(): void {
    addEventListener('pointermove', ev => {
      this.#x = ev.x
      this.#y = ev.y
    })

    requestAnimationFrame(() => this.#loop())

    addEventListener('pointerdown', ev => {
      const sx = innerWidth / levelWH.w
      const sy = innerHeight / levelWH.h
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

  #draw(): void {
    const ctx = this.#canvas.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
    ctx.rect(0, 0, this.#canvas.width, this.#canvas.height)
    ctx.fillStyle = paletteWhite
    ctx.fill()
    ctx.fillStyle = this.#bg
    ctx.fill()

    const sx = innerWidth / levelWH.w
    const sy = innerHeight / levelWH.h

    const pointed = this.#facetAtXY(this.#x / sx, this.#y / sy)

    ctx.save()
    // ctx.scale(sx, sy)

    for (const facet of this.#facets)
      facetDraw(facet, ctx, this.#patterns, pointed)

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
