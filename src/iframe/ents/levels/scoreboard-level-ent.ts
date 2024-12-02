import type {Box, WH} from '../../../shared/types/2d.ts'
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
  console.log('hello')
}

export function scoreboardLevelEntUpdate(
  lvl: ScoreboardLevelEnt,
  game: Game
): void {
  updateGrid(lvl, game)
}

function updateGrid(lvl: ScoreboardLevelEnt, game: InitGame): void {}
