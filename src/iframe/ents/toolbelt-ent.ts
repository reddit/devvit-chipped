import {
  minCanvasWH,
  paletteBlack,
  spacePx,
  toolbeltSmallIconSize
} from '../../shared/theme.js'
import type {Box} from '../../shared/types/2d.js'
import {type Cam, camScale} from '../types/cam.js'
import {drawText} from '../types/draw.js'
import type {Game, LoadedGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import {cursorEntHits} from './cursor-ent.js'
import type {EID} from './eid.js'
import {CodexLevelEnt} from './levels/codex-level-ent.js'
import {RockLevelEnt} from './levels/rock-level-ent.js'

export type ToolbeltEnt = Box & {
  layer: Layer
  codex: Box
  rock: Box
  readonly type: 'Toolbelt'
  readonly eid: EID
}

const chipsW: number = 64
export function ToolbeltEnt(game: LoadedGame): ToolbeltEnt {
  const toolbelt: ToolbeltEnt = {
    eid: game.eid.new(),
    layer: 'UI',
    codex: {
      x: 0,
      y: 0,
      w: game.img.codexButton.naturalWidth,
      h: game.img.codexButton.naturalHeight
    },
    rock: {
      x: 0,
      y: 0,
      w: game.img.rockButton.naturalWidth,
      h: game.img.rockButton.naturalHeight
    },
    type: 'Toolbelt',
    x: 0,
    y: 0,
    w: 0,
    h: 0
  }
  updateBox(toolbelt, game)
  return toolbelt
}

export function toolbeltEntDraw(
  toolbelt: Readonly<ToolbeltEnt>,
  game: Readonly<Game>
): void {
  const {c2d, cam, codex, img, chips} = game
  const zoom = Math.min(2, camScale(minCanvasWH, 1, 0, false))

  c2d.save()
  c2d.translate(-cam.x, -cam.y)

  c2d.beginPath()
  c2d.roundRect(toolbelt.x, toolbelt.y, toolbelt.w, toolbelt.h, spacePx)
  c2d.fillStyle = game.draw.bg
  c2d.fill()
  c2d.lineWidth = 1
  c2d.strokeStyle = paletteBlack
  c2d.stroke()

  const pad = {w: spacePx, h: spacePx}
  drawText(c2d, `${(chips / 1024).toFixed(1)} c`, {
    x: Math.round(toolbelt.x + (spacePx * 2 + chipsW * zoom) / 2),
    y: Math.round(
      toolbelt.y + (toolbeltSmallIconSize * zoom + spacePx * 2) / 2
    ),
    size: 24 * zoom,
    fill: paletteBlack,
    justify: 'Center',
    pad
  })

  c2d.beginPath()
  c2d.drawImage(
    codex.found == null ? img.rockButton : img.rockMinButton,
    toolbelt.rock.x,
    toolbelt.rock.y,
    toolbelt.rock.w,
    toolbelt.rock.h
  )
  c2d.beginPath()
  c2d.drawImage(
    img.codexButton,
    toolbelt.codex.x,
    toolbelt.codex.y,
    toolbelt.codex.w,
    toolbelt.codex.h
  )
  c2d.restore()
}

export function toolbeltEntUpdate(toolbelt: ToolbeltEnt, game: Game): void {
  const {cam, ctrl, zoo} = game
  updateBox(toolbelt, game)

  if (!ctrl.isOnStart('A')) return

  if (cursorEntHits(game, toolbelt.rock) && zoo.lvl?.type !== 'RockLevel') {
    ctrl.handled = true
    zoo.replace(RockLevelEnt(game))
    return
  }

  if (cursorEntHits(game, toolbelt.codex) && zoo.lvl?.type !== 'CodexLevel') {
    ctrl.handled = true
    zoo.replace(CodexLevelEnt(game))
    return
  }

  if (cursorEntHits(game, toolbelt)) ctrl.handled = true
}

function updateBox(toolbelt: ToolbeltEnt, game: Readonly<LoadedGame>): void {
  const {cam} = game
  const zoom = Math.min(2, camScale(minCanvasWH, 1, 0, false))
  const shrink = 1 / (3 - zoom)

  const pad = {w: spacePx, h: spacePx}
  // to-do: want to use cam.minWH not minCanvasWH.
  const toolbeltSmallSide = toolbeltSmallIconSize * zoom + 2 * spacePx
  const wh = cam.portrait
    ? {w: 177 * zoom, h: toolbeltSmallSide}
    : {w: toolbeltSmallSide, h: 177 * zoom}
  const lead = cam.lead(wh, cam.portrait ? 'South' : 'West', {pad})
  toolbelt.x = lead.x
  toolbelt.y = lead.y
  toolbelt.w = lead.w
  toolbelt.h = lead.h

  toolbelt.rock.x =
    toolbelt.x +
    (cam.portrait ? chipsW * zoom : 0) +
    (cam.portrait ? 0 : spacePx)
  toolbelt.rock.y =
    toolbelt.y +
    (cam.portrait ? 0 : chipsW * zoom) +
    (cam.portrait ? spacePx : 0)
  toolbelt.rock.w = game.img.codexButton.naturalWidth * shrink
  toolbelt.rock.h = game.img.codexButton.naturalHeight * shrink

  toolbelt.codex.x =
    toolbelt.rock.x + (cam.portrait ? toolbelt.rock.w + spacePx : 0)
  toolbelt.codex.y =
    toolbelt.rock.y + (cam.portrait ? 0 : toolbelt.rock.h + spacePx)
  toolbelt.codex.w = game.img.rockButton.naturalWidth * shrink
  toolbelt.codex.h = game.img.rockButton.naturalHeight * shrink
}
