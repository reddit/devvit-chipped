import {chipsFmt} from '../../shared/chip-util.js'
import {
  extraThickStroke,
  fontXLSize,
  paletteBlack,
  paletteWhite,
  spacePx
} from '../../shared/theme.js'
import {drawText} from '../types/draw.js'
import type {Game, InitGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import {uiScale} from '../ui.js'
import type {EID} from './eid.js'

export type RockStatusEnt = {
  layer: Layer
  readonly type: 'RockStatus'
  readonly eid: EID
}

export function RockStatusEnt(game: Readonly<InitGame>): RockStatusEnt {
  return {eid: game.eid.new(), layer: 'UIFg', type: 'RockStatus'}
}

export function rockStatusEntDraw(
  _stat: Readonly<RockStatusEnt>,
  game: Readonly<Game>
): void {
  const {c2d, cam, chips, img} = game
  const scale = uiScale()

  const text = drawText(c2d, chipsFmt(chips, 'Short'), {
    fill: paletteBlack,
    x: Math.round(cam.w / 2),
    y: spacePx * 4 * scale,
    origin: 'TopCenter',
    size: fontXLSize * scale,
    stroke: paletteWhite,
    strokeWidth: extraThickStroke
  })

  if (game.codex.found != null) {
    c2d.beginPath()
    const mineralW = 57 * scale
    c2d.drawImage(
      img.mineral,
      text.x - 3 * spacePx - mineralW,
      spacePx + spacePx * 3 * scale,
      mineralW,
      85 * scale
    )
  }
}

export function rockStatusEntUpdate(_stat: RockStatusEnt, _game: Game): void {}
