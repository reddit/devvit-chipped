import type {Player, PostSeed} from '../../shared/save.ts'
import type {Facet} from '../../shared/types/facet.ts'
import type {Random} from '../../shared/types/random.ts'
import type {T3} from '../../shared/types/tid.ts'
import type {UTCMillis} from '../../shared/types/time.ts'
import type {CursorEnt} from '../ents/cursor-ent.ts'
import type {EIDFactory} from '../ents/eid.ts'
import type {ToolbeltEnt} from '../ents/toolbelt-ent.ts'
import type {Zoo} from '../ents/zoo.ts'
import type {DefaultButton, Input} from '../input/input.ts'
import type {Assets} from './assets.ts'
import type {AudioBufferByName} from './audio.ts'
import type {Cam} from './cam.ts'
import type {C2D, Canvas, Draw} from './draw.ts'

/** assets are loaded, then LoadedGame is sent, and InitGame is received. */

export type LoadedGame = Pick<Assets, 'img'> &
  Partial<Init> &
  Partial<Drawable> & {
    audio: AudioContext
    cam: Cam
    canvas: Canvas
    chips: number
    codex: {found: number | undefined; foundTriggered: boolean}
    ctrl: Input<DefaultButton>
    cursor: CursorEnt
    toolbelt: ToolbeltEnt
    debug: boolean
    eid: EIDFactory
    now: UTCMillis
    snoovatar: {[url: string]: HTMLImageElement}
    sound: AudioBufferByName
    zoo: Zoo
  }
export type InitGame = LoadedGame & Init
export type Game = LoadedGame & Init & Drawable

type Init = {
  /** rock color. */
  facets: Facet[]
  p1: Player
  rnd: Random
  scoreboard: Player[]
  seed: PostSeed
  t3: T3
}

type Drawable = {c2d: C2D; draw: Omit<Draw, 'c2d'>}

export function isInitGame(game: LoadedGame): game is InitGame {
  return game.rnd != null
}

export function isGame(game: LoadedGame): game is Game {
  return isInitGame(game) && game.c2d != null
}
