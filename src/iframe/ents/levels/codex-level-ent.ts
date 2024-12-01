import {minCat} from '../../../shared/min-cat/min-cat.ts'
import {
  minCanvasWH,
  paletteBlack,
  paletteWhite,
  spacePx,
  toolbeltSmallSide
} from '../../../shared/theme.ts'
import type {Box, WH} from '../../../shared/types/2d.ts'
import {drawText} from '../../types/draw.ts'
import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import {cursorEntHits} from '../cursor-ent.ts'
import type {EID} from '../eid.ts'
import {ToolbeltEnt} from '../toolbelt-ent.ts'

export type CodexLevelEnt = {
  readonly eid: EID
  grid: Box
  next: Box
  prev: Box
  layer: Layer
  magnification: number
  readonly type: 'CodexLevel'
}

type Magnification = {
  cardWH: WH
  showCard: boolean
  showIMA: number
  showText: boolean
}

const margin: number = spacePx / 2
const gridPad: Readonly<WH> = {
  w: toolbeltSmallSide + spacePx,
  h: toolbeltSmallSide + spacePx
}

const magnifications: readonly Readonly<Magnification>[] = [
  {cardWH: {w: 60, h: 60}, showCard: false, showIMA: 0, showText: false},
  {cardWH: {w: 120, h: 120}, showCard: true, showIMA: 24, showText: false},
  {cardWH: {w: 140, h: 170}, showCard: true, showIMA: 20, showText: true}
]
const cardWH: Readonly<WH> = {w: 140, h: 170}

export function CodexLevelEnt(game: InitGame): CodexLevelEnt {
  const {img, zoo} = game
  // state.ctrl.allowContextMenu = false
  zoo.clear()

  zoo.replace(game.cursor, ToolbeltEnt(game))
  // state.p1.hp = playerDefaultHP
  // state.p1.score = 0
  // state.p1.x = state.p1.y = 4800

  const lvl: CodexLevelEnt = {
    eid: game.eid.new(),
    grid: {x: 0, y: 0, w: 0, h: 0},
    magnification: 2,
    next: {
      x: 0,
      y: 0,
      w: img.nextButton.naturalWidth,
      h: img.prevButton.naturalHeight
    },
    prev: {
      x: 0,
      y: 0,
      w: img.prevButton.naturalWidth,
      h: img.prevButton.naturalHeight
    },
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
  const {cam, c2d, img} = game

  c2d.save()
  c2d.translate(-cam.x, -cam.y) // to-do: don't translate UI layer.

  const {cardWH, showCard, showIMA, showText} =
    magnifications[lvl.magnification]!

  const codex = Object.values(game.p1.codex).sort((lhs, rhs) =>
    lhs.ima.localeCompare(rhs.ima)
  )

  let i = game.codex.index
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

      const color = paletteWhite // min.color

      if (showCard) {
        c2d.beginPath()
        c2d.roundRect(x, y, cardWH.w, cardWH.h, spacePx)
        c2d.fillStyle = color
        c2d.fill()
        c2d.lineWidth = i === game.codex.found ? 3 : 1
        c2d.strokeStyle = paletteBlack
        c2d.stroke()
      }

      c2d.beginPath()
      const offset = {
        x: x - min.origin.x + cardWH.w / 2 - min.w / 2,
        y: y - min.origin.y + cardWH.h / 2 - min.h / 2
      }

      c2d.moveTo(min.poly[0]!.x + offset.x, min.poly[0]!.y + offset.y)
      // review old impl. consider data svg.
      for (const xy of min.poly) c2d.lineTo(xy.x + offset.x, xy.y + offset.y)
      c2d.closePath()
      c2d.fillStyle = paletteBlack
      c2d.fill()
      c2d.lineWidth = 1
      c2d.strokeStyle = color
      c2d.stroke()

      let imaBox
      if (showIMA)
        imaBox = drawText(c2d, min.ima, {
          x: Math.round(x + cardWH.w / 2),
          y: Math.round(y),
          fill: paletteBlack,
          stroke: color,
          size: showIMA,
          justify: 'TopCenter'
        })
      if (showText) {
        const cat = minCat[min.ima]!
        drawText(c2d, `${trunc(cat.name)}`, {
          x: Math.round(x + cardWH.w / 2),
          y: Math.round(y + imaBox!.h),
          fill: paletteBlack,
          stroke: color,
          size: 14,
          justify: 'TopCenter'
        })
        drawText(c2d, `${(min.chips / 1024).toFixed(3)} c`, {
          x: Math.round(x + cardWH.w / 2),
          y: Math.round(y + cardWH.h - spacePx),
          fill: paletteBlack,
          stroke: color,
          size: 24,
          justify: 'BottomCenter'
        })
      }

      if (!cardWH.w) x += min.w
      i++
    }
  }

  c2d.restore()

  c2d.beginPath()
  c2d.roundRect(spacePx, spacePx, 228, 64, spacePx)
  c2d.fillStyle = paletteWhite
  c2d.fill()
  c2d.lineWidth = 1
  c2d.strokeStyle = paletteBlack
  c2d.stroke()

  c2d.beginPath()
  c2d.drawImage(img.prevButton, lvl.prev.x, lvl.prev.y, lvl.prev.w, lvl.prev.h)

  c2d.beginPath()
  c2d.drawImage(img.nextButton, lvl.next.x, lvl.next.y, lvl.next.w, lvl.next.h)

  drawText(c2d, `${codex.length} / ${Object.keys(minCat).length}`, {
    x: spacePx * 2 + lvl.prev.w + spacePx + lvl.next.w + spacePx,
    y: spacePx + 64 / 2,
    justify: 'MidLeft',
    fill: paletteBlack
  })
}

export function codexLevelEntUpdate(lvl: CodexLevelEnt, game: Game): void {
  updateGrid(lvl, game)
}

function updateGrid(lvl: CodexLevelEnt, game: InitGame): void {
  const {cam, ctrl} = game
  const lead = cam.lead(minCanvasWH, 'Northwest', {pad: gridPad, fill: 'XY'})
  lvl.grid.x = lead.x
  lvl.grid.y = lead.y
  lvl.grid.w = lead.w
  lvl.grid.h = lead.h

  lvl.prev.x = spacePx * 2
  lvl.prev.y = spacePx * 2
  lvl.next.x = spacePx * 2 + lvl.prev.w + spacePx
  lvl.next.y = spacePx * 2

  const page = Math.max(
    1,
    Math.trunc(lvl.grid.w / (cardWH.w + margin)) *
      Math.trunc(lvl.grid.h / (cardWH.h + margin))
  )
  if (game.codex.found != null && game.codex.foundTriggered) {
    if (
      game.codex.found < game.codex.index ||
      game.codex.found >= game.codex.index + page
    )
      game.codex.index = game.codex.found
    game.codex.foundTriggered = false
    return
  }

  if (ctrl.handled || !ctrl.isOnStart('A')) return

  if (cursorEntHits(game, lvl.prev, 'Client')) {
    ctrl.handled = true
    game.codex.index = Math.max(0, game.codex.index - page)
  } else if (cursorEntHits(game, lvl.next, 'Client')) {
    ctrl.handled = true
    if (game.codex.index + page < Object.values(game.p1.codex).length)
      game.codex.index += page
  }

  // if (game.ctrl.isOnStart('A')) {
  //   game.ctrl.handled = true
  //   lvl.magnification = (lvl.magnification + 1) % magnifications.length
  // }
}

function trunc(str: string): string {
  return str.length > 23 ? `${str.slice(0, 22)}…` : str
}
