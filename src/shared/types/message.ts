import type {Player, PostSeed, Profile} from '../save.ts'
import type {T3} from './tid.ts'
import type {UTCMillis} from './time.ts'

/** a message from blocks to the iframe. */
export type DevvitMessage = {
  /** rock discoverer. */
  author: Profile
  /** rock discovery timestamp. */
  created: UTCMillis
  /**
   * configure iframe lifetime debug mode. this is by request in devvit but that
   * granularity doesn't make sense in the iframe.
   */
  debug: boolean
  p1: Player
  seed: PostSeed
  scoreboard: Player[]
  /** post / rock ID. */
  t3: T3
  readonly type: 'Init'
}

/** the devvit API wraps all messages from blocks to the iframe. */
export type DevvitSystemMessage = {
  readonly type?: 'devvit-message'
  data: {message: DevvitMessage}
}

/** a message from the iframe to devvit. */
export type WebViewMessage =
  | {readonly type: 'Loaded'}
  | {readonly type: 'NewGame'; p1: Player}
  | {readonly type: 'Save'; p1: Player}
