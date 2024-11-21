import {Devvit, type JobContext, type RedisClient} from '@devvit/public-api'
import type {Player} from '../shared/types/player.js'
import {randomEndSeed} from '../shared/types/random.js'
import {T2, type T3} from '../shared/types/tid.js'
import {type PlayRecord, PlayerRecord, type PostRecord} from './record.js'

/** play ID. each player is allowed one play per post. */
export type T3T2 = `${T3}:${T2}`

/** player, post, and play look up. */

/** PlayerRecord by user ID; player look up. */
const playerByT2Key: string = 'player_by_t2'

/** PostRecord by post ID; post look up. */
const postByT3Key: string = 'post_by_t3'

/** PlayRecord by T3T2; play look up. */
const playByT3T2Key: string = 'play_by_t3_t2'

/** player leaderboard across sub. */

/** user IDs ordered by specimens found and size; player leaderboard. */
const t2SpecimenZKey: string = 't2_specimen_z'

Devvit.configure({redis: true})

export function PostSeed(): number {
  // don't use seeded random to generate the next seed since users would likely
  // generate duplicates.
  return Math.trunc(Math.random() * randomEndSeed)
}

export function T3T2(t3: T3, t2: T2): T3T2 {
  return `${t3}:${t2}`
}

export async function redisSetPost(
  redis: RedisClient,
  post: Readonly<PostRecord>
): Promise<void> {
  await redis.hSet(postByT3Key, {[post.t3]: JSON.stringify(post)}) // lookup.
}

export async function redisQueryPost(
  redis: RedisClient,
  t3: T3
): Promise<PostRecord | undefined> {
  const json = await redis.hGet(postByT3Key, t3)
  if (json) return JSON.parse(json)
}

export async function redisQueryPlayer(
  redis: RedisClient,
  t2: T2
): Promise<PlayerRecord | undefined> {
  const json = await redis.hGet(playerByT2Key, t2)
  if (json) return JSON.parse(json)
}

export async function redisQueryP1(ctx: JobContext): Promise<Player> {
  if (!ctx.userId) throw Error('no T2')
  const t2 = T2(ctx.userId)
  return (
    (await redisQueryPlayer(ctx.redis, t2)) ??
    (await PlayerRecord(ctx.reddit, t2))
  )
}

export async function redisSetPlayer(
  redis: RedisClient,
  player: Readonly<PlayerRecord>
): Promise<void> {
  await Promise.all([
    redis.hSet(playerByT2Key, {[player.t2]: JSON.stringify(player)}),
    redis.zAdd(t2SpecimenZKey, {member: player.t2, score: 0}) // to-do: compute player lifetime specimen aggregation from inven.
  ])
}

export async function redisCreatePlay(
  redis: RedisClient,
  play: Readonly<PlayRecord>,
  t2: T2
): Promise<void> {
  await redis.hSet(playByT3T2Key, {[T3T2(play.t3, t2)]: JSON.stringify(play)}) // lookup
}

export async function redisQueryPlay(
  redis: RedisClient,
  t3t2: T3T2
): Promise<PlayRecord | undefined> {
  const json = await redis.hGet(playByT3T2Key, t3t2)
  if (json) return JSON.parse(json)
}

export async function redisQueryLeaderboard(redis: RedisClient): Promise<T2[]> {
  const range = await redis.zRange(
    t2SpecimenZKey,
    -Number.MAX_VALUE,
    Number.MAX_VALUE,
    {by: 'score', reverse: true}
  )
  return range.map(({member}) => T2(member))
}
