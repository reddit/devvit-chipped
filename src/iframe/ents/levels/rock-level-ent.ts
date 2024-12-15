import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import type {EID} from '../eid.ts'
import {FacetEnt} from '../facet-ent.ts'
import {RockStatusEnt} from '../rock-status.ts'

export type RockLevelEnt = {
  readonly eid: EID
  layer: Layer
  readonly type: 'RockLevel'
}

export function RockLevelEnt(game: InitGame): RockLevelEnt {
  const {cursor, chips: facets, toolbelt, zoo} = game
  // state.ctrl.allowContextMenu = false
  zoo.clear()
  zoo.replace(
    cursor,
    ...facets.map(facet => FacetEnt(game, facet)),
    RockStatusEnt(game),
    toolbelt
  )
  toolbelt.ents.rock.selected = true
  return {eid: game.eid.new(), layer: 'Level', type: 'RockLevel'}
}

export function rockLevelEntDraw(
  _lvl: Readonly<RockLevelEnt>,
  _game: Readonly<Game>
): void {}

export function rockLevelEntUpdate(_lvl: RockLevelEnt, _game: Game): void {}
