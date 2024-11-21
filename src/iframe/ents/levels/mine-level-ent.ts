import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import type {EID} from '../eid.ts'
import {FacetEnt} from '../facet-ent.ts'
import {ToolbeltEnt} from '../toolbelt-ent.ts'

export type MineLevelEnt = {
  readonly eid: EID
  layer: Layer
  readonly type: 'MineLevel'
}

export function MineLevelEnt(game: InitGame): MineLevelEnt {
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

  return {eid: game.eid.new(), layer: 'Level', type: 'MineLevel'}
}

export function mineLevelEntDraw(
  _lvl: Readonly<MineLevelEnt>,
  _game: Readonly<Game>
): void {}

export function mineLevelEntUpdate(_lvl: MineLevelEnt, _game: Game): void {
  // if (
  //   (state.init && state.p1.t2 !== state.author.t2) ||
  //   state.completed ||
  //   state.p1.hp <= 0
  // ) {
  //   if (state.p1.t2 === state.author.t2 && !state.completed)
  //     // only send game over if player triggered it and we're not revisiting an
  //     // old game.
  //     postMessage({type: 'GameOver', score: state.p1.score, id: state.msgID})
  // state.zoo.remove(lvl)
  // state.zoo.replace(DungeonLevel(state))
  // }
}
