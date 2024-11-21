import {type Box, type WH, type XY, boxHits} from '../../shared/types/2d.ts'

export class Cam {
  minWH: WH = {w: 256, h: 256} // ints when intScale.
  minScale: number = 1 // int when intScale.

  readonly #clientWH: WH = {w: 1, h: 1} // fraction.
  #h: number = this.minWH.h // int when intScale.
  #scale: number = 1 // int when intScale.
  #w: number = this.minWH.w // int when intScale.
  x: number = 0 // fraction.
  y: number = 0 // fraction.
  intScale: boolean = false

  /** integral height. */
  get h(): number {
    return this.#h
  }

  isVisible(box: Readonly<XY & Partial<WH>>): boolean {
    return boxHits(this, box)
  }

  lead(
    wh: Readonly<WH>,
    orientation: FollowCamOrientation,
    opts?: {
      readonly fill?: 'X' | 'Y' | 'XY'
      readonly modulo?: Partial<XY> | undefined
      readonly pad?: Partial<WH> | undefined
    }
  ): Box {
    const padW = opts?.pad?.w ?? 0
    let x = this.x
    switch (orientation) {
      case 'Southwest':
      case 'West':
      case 'Northwest':
        x += padW
        break
      case 'Southeast':
      case 'East':
      case 'Northeast':
        x += this.w - (wh.w + padW)
        break
      case 'North':
      case 'South':
      case 'Center':
        x += Math.trunc(this.w / 2) - Math.trunc(wh.w / 2)
        break
    }
    x -= x % ((opts?.modulo?.x ?? x) || 1)

    const padH = opts?.pad?.h ?? 0
    let y = this.y
    switch (orientation) {
      case 'North':
      case 'Northeast':
      case 'Northwest':
        y += padH
        break
      case 'Southeast':
      case 'South':
      case 'Southwest':
        y += this.h - (wh.h + padH)
        break
      case 'East':
      case 'West':
      case 'Center':
        y += Math.trunc(this.h / 2) - Math.trunc(wh.h / 2)
        break
    }
    y -= y % ((opts?.modulo?.y ?? y) || 1)

    const w =
      opts?.fill === 'X' || opts?.fill === 'XY' ? this.w - 2 * padW : wh.w
    const h =
      opts?.fill === 'Y' || opts?.fill === 'XY' ? this.h - 2 * padH : wh.h

    return {x, y, w, h}
  }

  get portrait(): boolean {
    return this.h > this.w
  }

  /** fill or just barely exceed the viewport in scaled pixels. */
  resize(zoomOut?: number): void {
    // WH of body in CSS px; document.body.getBoundingClientRect() returns
    // incorrectly large sizing on mobile that includes the address bar.
    this.#clientWH.w = innerWidth
    this.#clientWH.h = innerHeight

    this.#scale = camScale(this.minWH, this.minScale, zoomOut, this.intScale)
    if (this.intScale) this.#scale = Math.trunc(this.#scale)
    const native = nativeWH()
    this.#w = Math.ceil(native.w / this.#scale)
    this.#h = Math.ceil(native.h / this.#scale)
  }

  /** integral scale. */
  get scale(): number {
    return this.#scale
  }

  /** returns position in fractional level coordinates. */
  toLevelXY(clientXY: Readonly<XY>): XY {
    return {
      x: this.x + (clientXY.x / this.#clientWH.w) * this.#w,
      y: this.y + (clientXY.y / this.#clientWH.h) * this.#h
    }
  }

  /** integral width. */
  get w(): number {
    return this.#w
  }
}

export function camScale(
  minWH: Readonly<WH>,
  minScale: number,
  zoomOut: number | undefined,
  int: boolean
): number {
  const native = nativeWH()
  let scale = Math.max(
    minScale,
    Math.min(native.w / minWH.w, native.h / minWH.h) - (zoomOut ?? 0) // default is to zoom in as much as possible.
  )
  if (int) scale = Math.trunc(scale)
  return scale
}

/** position relative the camera's bounding box. */
export type FollowCamOrientation =
  | 'North'
  | 'Northeast'
  | 'East'
  | 'Southeast'
  | 'South'
  | 'Southwest'
  | 'West'
  | 'Northwest'
  | 'Center'

function nativeWH(): WH {
  return {
    w: Math.ceil(innerWidth * devicePixelRatio), // physical.
    h: Math.ceil(innerHeight * devicePixelRatio)
  }
}
