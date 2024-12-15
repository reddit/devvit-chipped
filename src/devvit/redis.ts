import type {JobContext, RedisClient} from '@devvit/public-api'
import type {PlaySave, Player, PostSave} from '../shared/save.js'
import {T2, type T3} from '../shared/types/tid.js'
import {r2Player} from './r2.js'

/** each player is allowed one play per post. */
export type PlayID = `${T3}:${T2}`

/** player, post, and play look up. */

/** Player by user ID; player look up. */
const playerByT2Key: string = 'player_by_t2'

/** PostSave by post ID; post look up. */
const postByT3Key: string = 'post_by_t3'

/** PlaySave by T3T2; play look up. */
const playByT3T2Key: string = 'play_by_t3_t2'

/** player leaderboard across sub. */

/** user IDs ordered by specimens found and size; player leaderboard. */
const t2SpecimenZKey: string = 't2_specimen_z'

export function PlayID(t3: T3, t2: T2): PlayID {
  return `${t3}:${t2}`
}

export async function redisSetPost(
  redis: RedisClient,
  post: Readonly<PostSave>
): Promise<void> {
  await redis.hSet(postByT3Key, {[post.t3]: JSON.stringify(post)}) // lookup.
}

export async function redisQueryPost(
  redis: RedisClient,
  t3: T3
): Promise<PostSave | undefined> {
  const json = await redis.hGet(postByT3Key, t3)
  if (json) return JSON.parse(json)
}

/** get or create player. */
export async function redisQueryPlayer(
  ctx: JobContext,
  t2: T2
): Promise<Player> {
  const json = await ctx.redis.hGet(playerByT2Key, t2)
  if (json) return JSON.parse(json)
  return await r2Player(ctx.reddit, t2)
}

export async function redisSetPlayer(
  redis: RedisClient,
  player: Readonly<Player>
): Promise<void> {
  await Promise.all([
    redis.hSet(playerByT2Key, {[player.profile.t2]: JSON.stringify(player)}),
    redis.zAdd(t2SpecimenZKey, {
      member: player.profile.t2,
      score: player.minerals
    })
  ])
}

export async function redisCreatePlay(
  redis: RedisClient,
  play: Readonly<PlaySave>,
  t2: T2
): Promise<void> {
  await redis.hSet(playByT3T2Key, {[PlayID(play.t3, t2)]: JSON.stringify(play)}) // lookup
}

export async function redisQueryPlay(
  redis: RedisClient,
  t3t2: PlayID
): Promise<PlaySave | undefined> {
  const json = await redis.hGet(playByT3T2Key, t3t2)
  if (json) return JSON.parse(json)
}

export async function redisQueryLeaderboard(redis: RedisClient): Promise<T2[]> {
  const range = await redis.zRange(t2SpecimenZKey, 0, '+inf', {
    by: 'score',
    reverse: true
  })
  return range.map(({member}) => T2(member))
}
