import {chipsFmt} from '../../../shared/chip-util.ts'
import type {Profile} from '../../../shared/save.ts'
import {
  fontLSize,
  fontMSize,
  paletteBlack,
  paletteWhite,
  spacePx,
  thickStroke
} from '../../../shared/theme.ts'
import type {Box, WH} from '../../../shared/types/2d.ts'
import {drawText} from '../../types/draw.ts'
import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import {uiScale} from '../../ui.ts'
import {buttonSize} from '../button-ent.ts'
import type {EID} from '../eid.ts'
import {PagerEnt} from '../pager-ent.ts'

export type ScoreboardLevelEnt = {
  readonly eid: EID
  ents: {pager: PagerEnt}
  grid: Box
  layer: Layer
  scores: {profile: Profile; minerals: number}[]
  readonly type: 'ScoreboardLevel'
}

const cardWH1x: Readonly<WH> = {w: 720, h: 60}
const iconSize: number = 144

export function ScoreboardLevelEnt(game: Game): ScoreboardLevelEnt {
  const {cursor, eid, p1, scoreboard, toolbelt, zoo} = game
  zoo.clear()
  zoo.replace(cursor, toolbelt)

  const scores = []
  for (const player of scoreboard) {
    if (player.profile.t2 === p1.profile.t2) continue
    scores.push({profile: player.profile, minerals: player.minerals})
  }
  scores.push({profile: p1.profile, minerals: p1.minerals})
  scores.sort((lhs, rhs) => rhs.minerals - lhs.minerals)

  const lvl: ScoreboardLevelEnt = {
    eid: eid.new(),
    ents: {pager: PagerEnt(game)},
    grid: {x: 0, y: 0, w: 0, h: 0},
    layer: 'Level',
    scores,
    type: 'ScoreboardLevel'
  }
  lvl.ents.pager.size = scores.length
  updateGrid(lvl, game)
  return lvl
}

export function scoreboardLevelEntDraw(
  lvl: ScoreboardLevelEnt,
  game: Readonly<Game>
): void {
  const {c2d} = game

  const scale = uiScale()

  const bg = {w: cardWH1x.w * scale, h: cardWH1x.h * scale}
  const cardWH = {w: cardWH1x.w * scale, h: bg.h}
  const r = (7 * bg.h) / 8
  const margin = {w: spacePx * 2, h: r + spacePx}

  let i = lvl.ents.pager.index
  for (
    let y = lvl.grid.y;
    y + cardWH.h < lvl.grid.y + lvl.grid.h;
    y += cardWH.h + margin.h
  ) {
    const x = lvl.grid.x + (lvl.grid.w - (cardWH.w + margin.w)) / 2
    const player = lvl.scores[i]
    if (!player) break

    c2d.beginPath()
    c2d.roundRect(x + 4, y + 2, bg.w - 8, bg.h - 4, spacePx)
    c2d.fillStyle = game.draw.bg
    c2d.fill()
    c2d.beginPath()
    c2d.roundRect(x + 2, y, bg.w - 2, bg.h, spacePx)
    c2d.lineWidth = 1
    c2d.strokeStyle = paletteBlack
    c2d.stroke()

    const snoovatar = game.snoovatar[player.profile.snoovatarURL]!

    c2d.save()
    c2d.beginPath()
    const wToH = snoovatar.naturalWidth / snoovatar.naturalHeight
    const w = Math.min(iconSize * scale, iconSize * scale * wToH)
    const h = Math.min(iconSize * scale, (iconSize * scale) / wToH)
    // c2d.rect(x + 2 * spacePx, y, r, r)
    c2d.arc(x + r, y + r / 2, r, 0, 2 * Math.PI)
    c2d.lineWidth = thickStroke
    c2d.strokeStyle = paletteBlack
    c2d.fillStyle = paletteWhite
    c2d.fill()
    c2d.stroke()
    c2d.rect(x, y - r / 2, 2 * r, r)
    c2d.clip()
    c2d.drawImage(
      snoovatar,
      x - w / 2 + r,
      y + cardWH.h / 2 - h / 2 + h / 8,
      w,
      h
    )
    c2d.restore()

    drawText(c2d, player.profile.username, {
      x: x + spacePx + 1.75 * r + spacePx,
      y: y + cardWH.h / 2,
      size: fontMSize * scale,
      fill: paletteBlack,
      stroke: paletteWhite,
      strokeWidth: 6,
      origin: 'MidLeft'
    })
    drawText(c2d, chipsFmt(player.minerals, 'Short'), {
      x: x + cardWH.w - spacePx,
      y: y + cardWH.h / 2,
      size: fontLSize * scale,
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

  const scale = uiScale()

  const bg = {w: cardWH1x.w * scale, h: cardWH1x.h * scale}
  const cardWH = {w: cardWH1x.w * scale, h: bg.h}
  const r = (7 * bg.h) / 8
  const margin = {w: spacePx * 2, h: r + spacePx}

  lvl.ents.pager.page = Math.trunc(lvl.grid.h / (cardWH.h + margin.h))
}
