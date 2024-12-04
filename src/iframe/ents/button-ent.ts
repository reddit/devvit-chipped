import {
  minButtonSize,
  minCanvasWH,
  normalTextSize,
  paletteAnotherWhite,
  paletteBlack,
  paletteBlack22,
  paletteGrey,
  paletteWhite,
  radius,
  thickStroke,
  thinStroke
} from '../../shared/theme.js'
import type {Box} from '../../shared/types/2d.js'
import type {Assets} from '../types/assets.js'
import {camScale} from '../types/cam.js'
import {drawText} from '../types/draw.js'
import type {Game} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import {cursorEntHits} from './cursor-ent.js'
import type {EID, EIDFactory} from './eid.js'

export type ButtonEnt = Box & {
  disabled: boolean
  layer: Layer
  onStart: boolean
  selected: boolean
  img: keyof Assets['img']
  text: string
  readonly type: 'Button'
  readonly eid: EID
}

export function ButtonEnt(
  eid: EIDFactory,
  img: keyof Assets['img'],
  text: string
): ButtonEnt {
  const size = buttonSize()
  return {
    disabled: false,
    eid: eid.new(),
    img,
    layer: 'UIFg',
    onStart: false,
    selected: false,
    text,
    type: 'Button',
    x: 0,
    y: 0,
    w: size,
    h: size
  }
}

export function buttonEntDraw(
  btn: Readonly<ButtonEnt>,
  game: Readonly<Game>
): void {
  const {c2d, ctrl} = game

  const hover = !btn.disabled && cursorEntHits(game, btn, 'Client')
  c2d.beginPath()
  c2d.roundRect(btn.x, btn.y, btn.w, btn.h, radius)
  c2d.fillStyle = hover
    ? ctrl.isOn('A')
      ? paletteBlack22
      : paletteAnotherWhite
    : paletteWhite
  c2d.fill()
  c2d.lineWidth =
    (hover && ctrl.isOn('A')) || btn.selected ? thickStroke : thinStroke
  c2d.strokeStyle = hover ? paletteBlack : paletteGrey
  c2d.stroke()

  c2d.save()
  c2d.beginPath()
  c2d.globalAlpha = btn.disabled ? 0.25 : 1
  c2d.drawImage(game.img[btn.img], btn.x, btn.y, btn.w, btn.h)
  c2d.restore()

  const textSize = normalTextSize * uiScale()
  drawText(c2d, btn.text, {
    x: btn.x + btn.w / 2,
    y: btn.y + btn.h / 2 + textSize,
    fill: paletteBlack,
    origin: 'Center',
    size: textSize
  })
}

export function buttonEntUpdate(btn: ButtonEnt, game: Game): void {
  const {ctrl} = game
  btn.w = btn.h = buttonSize()
  if (cursorEntHits(game, btn, 'Client')) {
    btn.onStart = !ctrl.handled && !btn.disabled && ctrl.isOnStart('A')
    ctrl.handled = !btn.disabled
  }
}

export function uiScale(max: number = 4): number {
  return Math.min(max, camScale(minCanvasWH, 1, 0, false))
}

export function buttonSize(): number {
  return minButtonSize * uiScale()
}
