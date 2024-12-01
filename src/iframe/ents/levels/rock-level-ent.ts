import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import type {EID} from '../eid.ts'
import {FacetEnt} from '../facet-ent.ts'
import {ToolbeltEnt} from '../toolbelt-ent.ts'

export type RockLevelEnt = {
  readonly eid: EID
  layer: Layer
  readonly type: 'RockLevel'
}

export function RockLevelEnt(game: InitGame): RockLevelEnt {
  const {zoo} = game
  // state.ctrl.allowContextMenu = false
  zoo.clear()

  zoo.replace(
    game.cursor,
    ToolbeltEnt(game),
    ...game.facets.map(facet => FacetEnt(game, facet))
  )
  // state.p1.hp = playerDefaultHP
  // state.p1.score = 0
  // state.p1.x = state.p1.y = 4800

  return {eid: game.eid.new(), layer: 'Level', type: 'RockLevel'}
}

export function rockLevelEntDraw(
  _lvl: Readonly<RockLevelEnt>,
  _game: Readonly<Game>
): void {}

export function rockLevelEntUpdate(_lvl: RockLevelEnt, _game: Game): void {}
