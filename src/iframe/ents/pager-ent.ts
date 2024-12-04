import {paletteBlack, spacePx} from '../../shared/theme.js'
import type {Box} from '../../shared/types/2d.js'
import type {Cam} from '../types/cam.js'
import type {Game, InitGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import {ButtonEnt, buttonSize} from './button-ent.js'
import type {EID} from './eid.js'

export type PagerEnt = Box & {
  readonly eid: EID
  ents: {
    next: ButtonEnt
    prev: ButtonEnt
  }
  index: number
  layer: Layer
  page: number
  size: number
  readonly type: 'Pager'
}

export function PagerEnt(game: InitGame): PagerEnt {
  const {cam, eid} = game
  const pager: PagerEnt = {
    eid: eid.new(),
    ents: {
      next: ButtonEnt(eid, 'nextButton', 'next'),
      prev: ButtonEnt(eid, 'prevButton', 'prev')
    },
    index: 0,
    layer: 'UIFg',
    page: 1,
    size: 0,
    type: 'Pager',
    x: 0,
    y: 0,
    w: 0,
    h: 0
  }
  updateBox(pager, cam)
  return pager
}

export function pagerEntDraw(
  pager: Readonly<PagerEnt>,
  game: Readonly<Game>
): void {
  const {c2d} = game

  c2d.beginPath()
  c2d.roundRect(pager.ents.prev.x - spacePx, spacePx, pager.w, pager.h, spacePx)
  c2d.fillStyle = game.draw.bg
  c2d.fill()
  c2d.lineWidth = 1
  c2d.strokeStyle = paletteBlack
  c2d.stroke()
}

export function pagerEntUpdate(pager: PagerEnt, game: Game): void {
  updateBox(pager, game.cam)
}

function updateBox(pager: PagerEnt, cam: Readonly<Cam>): void {
  const {prev, next} = pager.ents

  pager.w = 2 * buttonSize() + 3 * spacePx
  pager.h = buttonSize() + 2 * spacePx
  pager.x = cam.w / 2 - pager.w / 2
  pager.y = spacePx

  prev.x = pager.x + spacePx
  prev.y = spacePx * 2
  next.x = prev.x + prev.w + spacePx
  next.y = spacePx * 2

  prev.disabled = pager.index === 0
  next.disabled = pager.index + pager.page >= pager.size
  if (prev.onStart) pager.index = Math.max(0, pager.index - pager.page)
  else if (next.onStart) pager.index += pager.page
}
