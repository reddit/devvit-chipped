import {
  fontDefaultSize,
  fontFamily,
  paletteBlack,
  paletteBlack2,
  paletteGrey,
  paletteWhite
} from '../../shared/theme.ts'
import type {Box, WH, XY} from '../../shared/types/2d.ts'
import type {Random} from '../../shared/types/random.ts'
import type {Cam} from './cam.ts'

export type C2D = CanvasRenderingContext2D
export type Canvas = HTMLCanvasElement

export type Draw = {bg: CanvasPattern; c2d: C2D; facets: CanvasPattern[]}

export function Draw(canvas: HTMLCanvasElement, rnd: Random): Draw | undefined {
  const c2d =
    canvas.getContext('2d', {alpha: false, willReadFrequently: false}) ??
    undefined
  if (!c2d) return
  const bg = newPattern(c2d, 6, 130, paletteBlack2, 1, paletteWhite)
  if (!bg) return
  const facets = []
  // to-do: more variation. explore halftones and dither patterns.
  for (let i = 0; i < 32; i++) {
    // to-do: don't re-randomize if context is lost.
    const pattern = newPattern(
      c2d,
      6 + rnd.num * 12,
      rnd.num * 360,
      paletteBlack,
      1 + rnd.num * 2
    )
    if (!pattern) return
    facets.push(pattern)
  }
  return {bg, c2d, facets}
}

export function drawClear(c2d: C2D, cam: Readonly<Cam>): void {
  c2d.beginPath()
  c2d.fillStyle = paletteBlack
  c2d.fillRect(cam.x, cam.y, cam.w, cam.h)

  const radius = 16

  c2d.beginPath()
  c2d.lineWidth = 4
  c2d.roundRect(
    c2d.lineWidth,
    c2d.lineWidth,
    cam.w - 2 * c2d.lineWidth,
    cam.h - 2 * c2d.lineWidth,
    radius
  )
  c2d.strokeStyle = paletteGrey
  c2d.stroke()

  c2d.fillStyle = paletteWhite
  c2d.fill()
}

export function drawText(
  c2d: C2D,
  text: string,
  opts: Readonly<
    XY & {
      origin?:
        | 'Center'
        | 'BottomCenter'
        | 'BottomLeft'
        | 'BottomRight'
        | 'MidLeft'
        | 'MidRight'
        | 'TopLeft'
        | 'TopRight'
        | 'TopCenter' // to-do: align terminology with cam.
      fill?: string
      size?: number
      stroke?: string
      strokeWidth?: number
      pad?: Partial<WH> | undefined
    }
  >
): Box {
  if (opts.fill) c2d.fillStyle = opts.fill
  c2d.font = `${opts.size ? opts.size : fontDefaultSize}px ${fontFamily}`
  if (opts.stroke) c2d.strokeStyle = opts.stroke
  c2d.lineWidth = opts.strokeWidth ?? 4
  c2d.beginPath()
  const metrics = c2d.measureText(text)
  let x = opts.x
  let y = opts.y
  const justify = opts.origin ?? 'TopLeft'
  const padW = opts?.pad?.w ?? 0
  const padH = opts?.pad?.h ?? 0
  switch (justify) {
    case 'BottomCenter':
      x -= Math.trunc(metrics.width / 2 + padW)
      y -= c2d.lineWidth + padH
      break
    case 'BottomLeft':
      x += c2d.lineWidth + padW
      y -= c2d.lineWidth + padH
      break
    case 'BottomRight':
      x -= metrics.width + c2d.lineWidth + padW
      y -= c2d.lineWidth + padH
      break
    case 'Center':
      x -= Math.trunc((metrics.width + c2d.lineWidth) / 2) + padW
      y += Math.trunc(metrics.actualBoundingBoxAscent / 2)
      break
    case 'MidLeft':
      x += padW
      y += Math.trunc(metrics.actualBoundingBoxAscent / 2)
      break
    case 'MidRight':
      x -= metrics.width + c2d.lineWidth + padW
      y += Math.trunc(metrics.actualBoundingBoxAscent / 2)
      break
    case 'TopLeft':
      x += padW
      y +=
        metrics.actualBoundingBoxAscent +
        metrics.actualBoundingBoxDescent +
        c2d.lineWidth +
        padH
      break
    case 'TopCenter':
      x -= Math.trunc((metrics.width + c2d.lineWidth) / 2) + padW
      y += metrics.actualBoundingBoxAscent + c2d.lineWidth + padH
      break
    case 'TopRight':
      x -= metrics.width + c2d.lineWidth + padW
      y +=
        metrics.actualBoundingBoxAscent +
        metrics.actualBoundingBoxDescent +
        c2d.lineWidth +
        padH
      break
    default:
      justify satisfies never
  }
  if (opts.stroke) c2d.strokeText(text, x, y)
  if (opts.fill) c2d.fillText(text, x, y)
  const h = metrics.actualBoundingBoxAscent + c2d.lineWidth * 2
  // to-do: decide what to do about not wanting descent generally.
  // to-do: declare w/h above and use there and here. figure out if I need
  // different x/y offsets for each case too.
  return {x, y: y - h, w: c2d.lineWidth * 2 + metrics.width, h}
}

function newPattern(
  dstC2D: CanvasRenderingContext2D,
  spacing: number,
  degrees: number,
  style: string,
  width: number,
  style2: string = paletteWhite
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

  tile9C2D.beginPath()
  tile9C2D.rect(0, 0, tile9Canvas.width, tile9Canvas.height)
  tile9C2D.fillStyle = style2
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
  tile9C2D.lineCap = 'round'
  tile9C2D.stroke()

  tile9C2D.restore()

  const tileCanvas = document.createElement('canvas')
  tileCanvas.width = tileW
  tileCanvas.height = tileH

  const tileCtx = tileCanvas.getContext('2d')
  if (!tileCtx) return

  tileCtx.beginPath()
  tileCtx.drawImage(tile9Canvas, tileW, tileH, tileW, tileH, 0, 0, tileW, tileH)

  return dstC2D.createPattern(tileCanvas, 'repeat') ?? undefined
}
