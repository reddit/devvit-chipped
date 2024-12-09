import {
  fontLSize,
  fontXLSize,
  paletteBlack,
  spacePx,
  textMaxW
} from '../../../shared/theme.ts'
import type {Box} from '../../../shared/types/2d.ts'
import {drawText, drawText2} from '../../types/draw.ts'
import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import {uiScale} from '../../ui.ts'
import {buttonSize} from '../button-ent.ts'
import type {EID} from '../eid.ts'

export type HelpLevelEnt = {
  readonly eid: EID
  grid: Box
  layer: Layer
  readonly type: 'HelpLevel'
}

const instructions: string = `
find the mineral in the rock to fill your codex.
• tap rock edges to look for the mineral.
• keep tapping to break off a chip. if the chip is the smallest of any it touches, it's collected. if not, the cluster is lost.
• spend chips at chippy's store for another chance at a mineral.
• each post is a shareable rock that may be played once per player. tap the new hammer to create a new post.
`.trim()

export function HelpLevelEnt(game: Game): HelpLevelEnt {
  const {cursor, eid, toolbelt, zoo} = game
  zoo.clear()
  zoo.replace(cursor, toolbelt)

  const lvl: HelpLevelEnt = {
    eid: eid.new(),
    grid: {x: 0, y: 0, w: 0, h: 0},
    layer: 'Level',
    type: 'HelpLevel'
  }
  updateGrid(lvl, game)
  return lvl
}

export function helpLevelEntDraw(
  lvl: HelpLevelEnt,
  game: Readonly<Game>
): void {
  const {c2d, cam} = game

  const scale = uiScale()

  const howToPlay = drawText(c2d, 'how to play', {
    x: cam.portrait ? 4 * spacePx : buttonSize() + spacePx * 4,
    y: 2 * spacePx,
    origin: 'TopLeft',
    size: fontXLSize * scale,
    fill: paletteBlack
  })

  drawText2(c2d, instructions, {
    x: howToPlay.x,
    y: howToPlay.y + howToPlay.h + 12 * scale * spacePx, // to-do: height is busted.
    fill: paletteBlack,
    size: fontLSize * scale,
    maxW: Math.min(lvl.grid.w - 4 * spacePx, textMaxW),
    lineHeight: 0.85 * (fontXLSize * scale) //to-do: measure? line height canvas API?
  })
}

export function helpLevelEntUpdate(lvl: HelpLevelEnt, game: Game): void {
  updateGrid(lvl, game)
}

function updateGrid(lvl: HelpLevelEnt, game: InitGame): void {
  const {cam, toolbelt} = game

  if (cam.portrait) {
    lvl.grid.x = spacePx
    lvl.grid.y = buttonSize() + 4 * spacePx
    lvl.grid.w = cam.w - 2 * spacePx
    lvl.grid.h = cam.h - toolbelt.h - 8 * spacePx - buttonSize()
  } else {
    lvl.grid.x = toolbelt.w + 2 * spacePx
    lvl.grid.y = buttonSize() + 6 * spacePx
    lvl.grid.w = cam.w - toolbelt.w - 3 * spacePx
    lvl.grid.h = cam.h - 8 * spacePx - buttonSize()
  }
}
