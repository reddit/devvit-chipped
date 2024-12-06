import {chipsFmt} from '../../../shared/chip-util.ts'
import {minCat} from '../../../shared/min-cat/min-cat.ts'
import {
  fontLSize,
  fontMSize,
  fontXLSize,
  paletteBlack,
  paletteWhite,
  spacePx
} from '../../../shared/theme.ts'
import type {Box, WH} from '../../../shared/types/2d.ts'
import {drawText} from '../../types/draw.ts'
import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import {uiScale} from '../../ui.ts'
import {buttonSize} from '../button-ent.ts'
import type {EID} from '../eid.ts'
import {PagerEnt} from '../pager-ent.ts'

export type CodexLevelEnt = {
  readonly eid: EID
  ents: {pager: PagerEnt}
  grid: Box
  layer: Layer
  readonly type: 'CodexLevel'
}

const margin: number = spacePx / 2
const cardWH1x: Readonly<WH> = {w: 500, h: 700}

export function CodexLevelEnt(game: Game): CodexLevelEnt {
  const {cursor, eid, toolbelt, zoo} = game
  zoo.clear()
  zoo.replace(cursor, toolbelt)
  const lvl: CodexLevelEnt = {
    eid: eid.new(),
    ents: {pager: PagerEnt(game)},
    grid: {x: 0, y: 0, w: 0, h: 0},
    layer: 'Level',
    type: 'CodexLevel'
  }
  updateGrid(lvl, game)
  return lvl
}

export function codexLevelEntDraw(
  lvl: CodexLevelEnt,
  game: Readonly<Game>
): void {
  const {c2d, cam} = game
  const {pager} = lvl.ents

  const scale = uiScale()

  const cardWH = {w: cardWH1x.w * scale, h: cardWH1x.h * scale}

  const codex = Object.values(game.p1.codex).sort((lhs, rhs) =>
    lhs.ima.localeCompare(rhs.ima)
  )

  let i = pager.index
  y: for (
    let y = lvl.grid.y + (lvl.grid.h % (cardWH.h + margin)) / 2;
    y + cardWH.h < lvl.grid.y + lvl.grid.h;
    y += cardWH.h + margin
  ) {
    for (
      let x = lvl.grid.x + (lvl.grid.w % (cardWH.w + margin)) / 2;
      x + cardWH.w < lvl.grid.x + lvl.grid.w;
      x += cardWH.w + margin
    ) {
      if (i >= codex.length) break y
      const min = codex[i]!

      c2d.beginPath()
      c2d.roundRect(x + 2, y + 2, cardWH.w - 4, cardWH.h - 4, spacePx)
      c2d.fillStyle = game.draw.bg
      c2d.fill()
      c2d.beginPath()
      c2d.roundRect(x, y, cardWH.w, cardWH.h, spacePx)
      c2d.lineWidth = i === game.codex.found ? 3 : 1
      c2d.strokeStyle = paletteBlack
      c2d.stroke()

      c2d.beginPath()
      const minScale = scale * 6
      const offset = {
        x: x - min.origin.x * minScale + cardWH.w / 2 - (min.w * minScale) / 2,
        y: y - min.origin.y * minScale + cardWH.h / 2 - (min.h * minScale) / 2
      }

      c2d.moveTo(
        min.poly[0]!.x * minScale + offset.x,
        min.poly[0]!.y * minScale + offset.y
      )
      // review old impl. consider data svg.
      for (const xy of min.poly)
        c2d.lineTo(xy.x * minScale + offset.x, xy.y * minScale + offset.y)
      c2d.closePath()
      c2d.fillStyle = paletteBlack
      c2d.fill()
      c2d.lineWidth = 2
      c2d.strokeStyle = paletteWhite
      c2d.stroke()

      const imaBox = drawText(c2d, min.ima, {
        x: Math.round(x + cardWH.w / 2),
        y: Math.round(y),
        fill: paletteBlack,
        stroke: paletteWhite,
        size: fontXLSize * scale,
        origin: 'TopCenter'
      })

      const cat = minCat[min.ima]!
      drawText(c2d, `${trunc(cat.name)}`, {
        x: Math.round(x + cardWH.w / 2),
        y: Math.round(y + imaBox!.h),
        fill: paletteBlack,
        stroke: paletteWhite,
        size: fontMSize * scale,
        origin: 'TopCenter'
      })
      drawText(c2d, chipsFmt(min.chips, 'Long'), {
        x: Math.round(x + cardWH.w / 2),
        y: Math.round(y + cardWH.h - spacePx),
        fill: paletteBlack,
        stroke: paletteWhite,
        size: fontXLSize * scale,
        origin: 'BottomCenter'
      })

      i++
    }
  }

  drawText(c2d, `${codex.length} / ${Object.keys(minCat).length}`, {
    x: cam.w,
    y: 0,
    pad: {w: spacePx, h: spacePx},
    size: fontLSize * scale,
    stroke: paletteWhite,
    origin: 'TopRight',
    fill: paletteBlack
  })
}

export function codexLevelEntUpdate(lvl: CodexLevelEnt, game: Game): void {
  updateGrid(lvl, game)
}

function updateGrid(lvl: CodexLevelEnt, game: InitGame): void {
  const {cam, p1, toolbelt} = game
  const {pager} = lvl.ents

  const scale = uiScale()

  if (cam.portrait) {
    lvl.grid.x = spacePx
    lvl.grid.y = buttonSize() + 4 * spacePx
    lvl.grid.w = cam.w - 2 * spacePx
    lvl.grid.h = cam.h - toolbelt.h - 6 * spacePx - buttonSize()
  } else {
    lvl.grid.x = toolbelt.w + 2 * spacePx
    lvl.grid.y = buttonSize() + 2 * spacePx
    lvl.grid.w = cam.w - toolbelt.w - 3 * spacePx
    lvl.grid.h = cam.h - 2 * spacePx - buttonSize()
  }

  const cardWH = {w: cardWH1x.w * scale, h: cardWH1x.h * scale}

  const page = Math.max(
    1,
    Math.trunc(lvl.grid.w / (cardWH.w + margin)) *
      Math.trunc(lvl.grid.h / (cardWH.h + margin))
  )
  if (game.codex.found != null && game.codex.foundTriggered) {
    if (
      game.codex.found < pager.index ||
      game.codex.found >= pager.index + page
    )
      pager.index = game.codex.found
    game.codex.foundTriggered = false
    return
  }

  pager.page = page
  pager.size = Object.values(p1.codex).length
}

function trunc(str: string): string {
  return str.length > 23 ? `${str.slice(0, 22)}…` : str
}
