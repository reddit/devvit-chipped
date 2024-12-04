import {type Box, type WH, type XY, boxHits} from '../../shared/types/2d.js'
import type {Game, InitGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import type {EID, EIDFactory} from './eid.js'

export type CursorEnt = Box & {
  hidden: boolean
  layer: Layer
  readonly type: 'Cursor'
  readonly eid: EID
}

const hitbox: Readonly<Box> = {x: 0, y: 0, w: 1, h: 1}

export function CursorEnt(eid: EIDFactory): CursorEnt {
  return {
    eid: eid.new(),
    hidden: true,
    layer: 'Cursor',
    type: 'Cursor',
    x: 0,
    y: 0,
    w: 1,
    h: 1
  }
}

export function cursorEntHitbox(
  game: Readonly<InitGame>,
  coords: 'Level' | 'Client'
): Box {
  const {cam, ctrl, cursor} = game
  const lvl = coords === 'Level'
  if (game.cursor.hidden) {
    // to-do: how to correlate with innerWidth * devicePixelRatio? should this
    //        be in Pointer.clientPoint?
    const x = lvl ? ctrl.point.x : ctrl.clientPoint.x * devicePixelRatio
    const y = lvl ? ctrl.point.y : ctrl.clientPoint.y * devicePixelRatio
    return {x: x - hitbox.w / 2, y: y - hitbox.h / 2, w: hitbox.w, h: hitbox.h}
  }
  return {
    x: cursor.x + (lvl ? cam.x : 0) + hitbox.x,
    y: cursor.y + (lvl ? cam.y : 0) + hitbox.y,
    w: hitbox.w,
    h: hitbox.h
  }
}

export function cursorEntHits(
  game: Readonly<InitGame>,
  box: Readonly<XY & Partial<WH>>,
  coords: 'Level' | 'Client'
): boolean {
  return boxHits(cursorEntHitbox(game, coords), box)
}

export function cursorEntDraw(
  cursor: Readonly<CursorEnt>,
  _game: Readonly<Game>
): void {
  if (cursor.hidden) return
  // game.c2d.beginPath()
  // game.c2d.drawImage(
  //   game.img.cursor,
  //   game.ctrl.isOn('A') ? cursor.w : 0,
  //   0,
  //   cursor.w,
  //   cursor.h,
  //   cursor.x,
  //   cursor.y,
  //   cursor.w,
  //   cursor.h
  // )
}

export function cursorEntUpdate(cursor: CursorEnt, game: Game): void {
  if (game.ctrl.pointOn && game.ctrl.pointType === 'mouse') {
    //cursor.hidden = false
  } else if (
    // to-do: make it possible to detect keyboard distinctly.
    game.ctrl.isAnyOn('L', 'R', 'U', 'D') ||
    game.ctrl.pointType !== 'mouse'
  )
    cursor.hidden = true
  cursor.x =
    Math.round(game.ctrl.point.x) - game.cam.x - (hitbox.x + hitbox.w / 2)
  cursor.y =
    Math.round(game.ctrl.point.y) - game.cam.y - (hitbox.y + hitbox.h / 2)
}
