import type {Post, RedditAPIClient} from '@devvit/public-api'
import {Player} from '../shared/types/player.ts'
import {
  type T2,
  type T3,
  anonSnoovatarURL,
  anonUsername
} from '../shared/types/tid.ts'
import {type UTCMillis, utcMillisNow} from '../shared/types/time.ts'

export type PlayerRecord = Player

/**
 * rock play record for a player. recorded when a playthrough has actually been
 * started, not when a post has been created, and updated when finished.
 */
export type PlayRecord = {
  /** creation timestamp. */
  created: UTCMillis
  t2: T2
  t3: T3
}

export type PostRecord = {
  /** original poster. */
  author: T2
  /** post creation timestamp. */
  created: UTCMillis
  /** Random seed. */
  seed: number
  /** post ID. */
  t3: T3
}

export async function PlayerRecord(
  r2: RedditAPIClient,
  t2: T2
): Promise<PlayerRecord> {
  const user = await r2.getCurrentUser()
  // hack: why can't this be propulated in User?
  const snoovatarURL = (await user?.getSnoovatarUrl()) ?? anonSnoovatarURL
  return Player({snoovatarURL, t2, username: user?.username ?? anonUsername})
}

export function PlayRecord(t2: T2, t3: T3): PlayRecord {
  return {created: utcMillisNow(), t2, t3}
}

export function PostRecord(post: Readonly<Post>, seed: number): PostRecord {
  if (!post.authorId) throw Error('no T2')
  return {
    author: post.authorId,
    created: post.createdAt.getUTCMilliseconds() as UTCMillis,
    seed,
    t3: post.id
  }
}
