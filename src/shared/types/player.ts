import type {T2, T3} from './tid.ts'

export const playerDefaultMaxHP: number = 30

export type Player = Profile & {
  chips: number
  /** rocks / posts created. */
  mined: T3[]
  // inven: Inven
}

export type Profile = {
  /** avatar image URL. */
  snoovatarURL: string
  /** player user ID. t2_0 for anons. */
  t2: T2
  /** player username. eg, spez. */
  username: string
}

export function Player(profile: Readonly<Profile>): Player {
  return {
    chips: 0,
    mined: [],
    snoovatarURL: profile.snoovatarURL,
    t2: profile.t2,
    username: profile.username
  }
}
