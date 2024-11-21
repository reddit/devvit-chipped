import {
  fontDefaultSize,
  minCanvasWH,
  paletteBlack,
  paletteWhite,
  spacePx
} from '../../shared/theme.js'
import type {Box} from '../../shared/types/2d.js'
import {drawText} from '../types/draw.js'
import type {Game, LoadedGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import type {EID} from './eid.js'

export type ToolbeltEnt = Box & {
  layer: Layer
  readonly type: 'Toolbelt'
  readonly eid: EID
}

export function ToolbeltEnt(game: LoadedGame): ToolbeltEnt {
  return {
    eid: game.eid.new(),
    layer: 'UI',
    type: 'Toolbelt',
    x: 0,
    y: 0,
    w: 0,
    h: 0
  }
}

export function toolbeltEntDraw(
  toolbelt: Readonly<ToolbeltEnt>,
  {c2d, cam, p1}: Readonly<Game>
): void {
  c2d.save()
  c2d.translate(-cam.x, -cam.y)

  c2d.beginPath()
  c2d.roundRect(toolbelt.x, toolbelt.y, toolbelt.w, toolbelt.h, spacePx)
  c2d.fillStyle = paletteWhite
  c2d.fill()
  c2d.lineWidth = 1
  c2d.strokeStyle = paletteBlack
  c2d.stroke()

  drawText(c2d, (p1.chips / 1024).toFixed(1), {
    x: toolbelt.x,
    y: toolbelt.y,
    fill: paletteBlack,
    justify: 'TopLeft'
  })
  drawText(c2d, 'chips', {
    x: toolbelt.x,
    y: toolbelt.y + fontDefaultSize,
    fill: paletteBlack,
    justify: 'TopLeft'
  })

  c2d.restore()
}

export function toolbeltEntUpdate(toolbelt: ToolbeltEnt, game: Game): void {
  const {cam} = game
  // to-do: want to use cam.minWH not levelWH.
  const pad = {w: spacePx, h: spacePx}
  const wh = cam.portrait
    ? {w: minCanvasWH.w - pad.w * 2, h: 64}
    : {w: 64, h: minCanvasWH.h - pad.h * 2}
  const lead = cam.lead(wh, cam.portrait ? 'South' : 'West', {pad})
  toolbelt.x = lead.x
  toolbelt.y = lead.y
  toolbelt.w = lead.w
  toolbelt.h = lead.h
}
