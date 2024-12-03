import {
  lineWidth,
  minCanvasWH,
  paletteBlack,
  paletteWhite,
  spacePx,
  toolbeltSmallIconSize
} from '../../../shared/theme.ts'
import type {Box, WH} from '../../../shared/types/2d.ts'
import {camScale} from '../../types/cam.ts'
import {drawText} from '../../types/draw.ts'
import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import type {EID} from '../eid.ts'
import {ToolbeltEnt} from '../toolbelt-ent.ts'

export type ScoreboardLevelEnt = {
  readonly eid: EID
  grid: Box
  layer: Layer
  magnification: number
  readonly type: 'ScoreboardLevel'
}

const cardWH1x: Readonly<WH> = {w: 240, h: 20}

export function ScoreboardLevelEnt(game: InitGame): ScoreboardLevelEnt {
  const {img, zoo} = game
  zoo.clear()
  zoo.replace(game.cursor, ToolbeltEnt(game))

  const lvl: ScoreboardLevelEnt = {
    eid: game.eid.new(),
    grid: {x: 0, y: 0, w: 0, h: 0},
    magnification: 2,
    layer: 'Level',
    type: 'ScoreboardLevel'
  }
  updateGrid(lvl, game)
  return lvl
}

export function scoreboardLevelEntDraw(
  lvl: ScoreboardLevelEnt,
  game: Readonly<Game>
): void {
  const {c2d} = game

  const zoom = Math.min(2, camScale(minCanvasWH, 1, 0, false))
  const shrink = 1 / (3 - zoom)
  const margin = {w: spacePx * 2, h: spacePx * 5 * shrink}

  const cardWH = {w: cardWH1x.w * zoom, h: cardWH1x.h * zoom}

  const players = game.scoreboard

  let i = game.scoreboardIndex
  for (
    let y = lvl.grid.y + (lvl.grid.h % (cardWH.h + margin.h)) / 2;
    y + cardWH.h < lvl.grid.y + lvl.grid.h;
    y += cardWH.h + margin.h
  ) {
    const x = lvl.grid.x + (lvl.grid.w - (cardWH.w + margin.w)) / 2
    if (i >= players.length) break
    c2d.beginPath()
    c2d.roundRect(x + 4, y + 2, cardWH.w - 8, cardWH.h - 4, spacePx)
    c2d.fillStyle = game.draw.bg
    c2d.fill()
    c2d.beginPath()
    c2d.roundRect(x + 2, y, cardWH.w - 2, cardWH.h, spacePx)
    c2d.lineWidth = 1
    c2d.strokeStyle = paletteBlack
    c2d.stroke()

    const player = players[i]!
    const snoovatar = game.snoovatar[player.profile.snoovatarURL]!

    c2d.save()
    c2d.beginPath()
    const wToH = snoovatar.naturalWidth / snoovatar.naturalHeight
    const w = Math.min(96 * shrink, 96 * shrink * wToH)
    const h = Math.min(96 * shrink, (96 * shrink) / wToH)
    const r = (7 * cardWH.h) / 8
    // c2d.rect(x + 2 * spacePx, y, r, r)
    c2d.arc(x + r, y + r / 2, r, 0, 2 * Math.PI)
    c2d.lineWidth = lineWidth
    c2d.strokeStyle = paletteBlack
    c2d.stroke()
    c2d.rect(x + r, y - r, 2 * r, 2 * r)
    c2d.clip()
    c2d.drawImage(snoovatar, x, y + cardWH.h / 2 - h / 2 + h / 8, w, h)
    c2d.restore()

    drawText(c2d, players[i]!.profile.username, {
      x: x + spacePx + 1.75 * r + spacePx,
      y: y + cardWH.h / 2,
      size: 16 * zoom,
      fill: paletteBlack,
      stroke: paletteWhite,
      strokeWidth: 6,
      origin: 'MidLeft'
    })
    drawText(c2d, `${(players[i]!.minerals / 1024).toFixed(1)} c`, {
      x: x + cardWH.w - spacePx,
      y: y + cardWH.h / 2,
      size: 20 * zoom,
      fill: paletteBlack,
      stroke: paletteWhite,
      strokeWidth: 6,
      origin: 'MidRight'
    })

    i++
  }
}

export function scoreboardLevelEntUpdate(
  lvl: ScoreboardLevelEnt,
  game: Game
): void {
  updateGrid(lvl, game)
}

function updateGrid(lvl: ScoreboardLevelEnt, game: InitGame): void {
  const {cam, ctrl} = game

  const zoom = Math.min(2, camScale(minCanvasWH, 1, 0, false))
  const belt = toolbeltSmallIconSize * zoom + 3 * spacePx

  lvl.grid.x = 0
  lvl.grid.y = belt
  lvl.grid.w = cam.w
  lvl.grid.h = cam.h - belt - (cam.portrait ? belt : 0)
}
