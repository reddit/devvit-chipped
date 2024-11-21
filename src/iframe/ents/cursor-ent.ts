import {spacePx} from '../../shared/theme.js'
import {type Box, type WH, type XY, boxHits} from '../../shared/types/2d.js'
import type {Assets} from '../types/assets.js'
import type {Game} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import type {EID, EIDFactory} from './eid.js'

export type CursorEnt = Box & {
  hidden: boolean
  layer: Layer
  readonly type: 'Cursor'
  readonly eid: EID
}

const hitbox: Readonly<Box> = {x: 0, y: 0, w: 8, h: 8}

export function CursorEnt(
  assets: Readonly<Assets>,
  eid: EIDFactory
): CursorEnt {
  return {
    eid: eid.new(),
    hidden: true,
    layer: 'Cursor',
    type: 'Cursor',
    x: 0,
    y: 0,
    w: assets.img.cursor.naturalWidth / 2,
    h: assets.img.cursor.naturalHeight
  }
}

export function cursorEntHits(
  cursor: Readonly<CursorEnt>,
  box: Readonly<XY & Partial<WH>>,
  game: Readonly<Game>
): boolean {
  if (cursor.hidden)
    return boxHits(
      {
        x: game.ctrl.point.x - spacePx / 2,
        y: game.ctrl.point.y - spacePx / 2,
        w: spacePx,
        h: spacePx
      },
      box
    )
  return boxHits(
    {
      x: cursor.x + hitbox.x,
      y: cursor.y + hitbox.y,
      w: hitbox.w,
      h: hitbox.h
    },
    box
  )
}

export function cursorEntDraw(
  cursor: Readonly<CursorEnt>,
  game: Readonly<Game>
): void {
  if (cursor.hidden) return
  game.c2d.beginPath()
  game.c2d.drawImage(
    game.img.cursor,
    game.ctrl.isOn('A') ? cursor.w : 0,
    0,
    cursor.w,
    cursor.h,
    cursor.x,
    cursor.y,
    cursor.w,
    cursor.h
  )
}

export function cursorEntUpdate(cursor: CursorEnt, game: Game): void {
  if (game.ctrl.pointOn && game.ctrl.pointType === 'mouse')
    cursor.hidden = false
  // to-do: make it possible to detect keyboard distinctly.
  else if (
    game.ctrl.isAnyOn('L', 'R', 'U', 'D') ||
    game.ctrl.pointType !== 'mouse'
  )
    cursor.hidden = true
  const pt = game.cam.toLevelXY(game.ctrl.clientPoint)
  cursor.x = Math.round(pt.x) - game.cam.x - (hitbox.x + hitbox.w / 2)
  cursor.y = Math.round(pt.y) - game.cam.y - (hitbox.y + hitbox.h / 2)
}
