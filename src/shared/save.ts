import {minCat} from './min-cat/min-cat.ts'
import type {XY} from './types/2d.ts'
import type {Facet} from './types/facet.ts'
import type {IMA} from './types/ima.ts'
import {type Random, type Seed, randomEndSeed} from './types/random.ts'
import type {T2, T3} from './types/tid.ts'
import {type UTCMillis, utcMillisNow} from './types/time.ts'

export type Player = {
  /** non-mineral rock matrix picked in px². */
  chips: number
  codex: {[ima: IMA]: Specimen}
  /** codex size in chips. */
  minerals: number
  /** rocks / posts discovered. */
  rocks: T3[]
  profile: Profile
}

/**
 * rock play record for a player. recorded when a playthrough has actually been
 * started, not when a post has been created, and updated when finished.
 */
export type PlaySave = {
  /** creation timestamp. */
  created: UTCMillis
  t2: T2
  t3: T3
}

export type PostSeed = {
  ima: IMA
  /** rock location. */
  locality: string
  /** Random seed. */
  seed: Seed
}

/** only the specimen should depend on the seed as MinCat may be revised. */
export type PostSave = {
  /** original poster. */
  author: T2
  /** post creation timestamp. */
  created: UTCMillis
  seed: PostSeed
  t3: T3
}

export type Profile = {
  /** avatar image URL. */
  snoovatarURL: string
  /** player user ID. t2_0 for anons. */
  t2: T2
  /** player username. eg, spez. */
  username: string
}

export type Specimen = {
  ima: IMA
  /** px². */
  chips: number
  /** min XY of poly. */
  origin: XY
  /** mineral shape. */
  poly: XY[]
  /** post seed. */
  seed: Seed
  /** mineral width. */
  w: number
  /** mineral height. */
  h: number
  t3: T3
}

export function Player(profile: Readonly<Profile>): Player {
  return {
    chips: 0,
    codex: {},
    minerals: 0,
    rocks: [],
    profile: {
      snoovatarURL: profile.snoovatarURL,
      t2: profile.t2,
      username: profile.username
    }
  }
}

export function PlaySave(t2: T2, t3: T3): PlaySave {
  return {created: utcMillisNow(), t2, t3}
}

export function PostSave(
  post: {readonly authorId: T2 | undefined; readonly createdAt: Date; id: T3},
  seed: Readonly<PostSeed>
): PostSave {
  if (!post.authorId) throw Error('no T2')
  return {
    author: post.authorId,
    created: post.createdAt.getUTCMilliseconds() as UTCMillis,
    seed,
    t3: post.id
  }
}

/**
 * don't use the original seed to generate the next since play is too
 * deterministic and may generate duplicate rocks.
 */
export function PostSeed(rnd: Random): PostSeed {
  const cat = Object.values(minCat)
  const ima = cat[Math.trunc(rnd.num * cat.length)]!.ima
  return {
    seed: Math.trunc(rnd.num * randomEndSeed) as Seed,
    ima,
    locality:
      minCat[ima]!.localities[
        Math.trunc(rnd.num * minCat[ima]!.localities.length)
      ] ?? ''
  }
}

export function Specimen(
  facet: Readonly<Facet>,
  seed: {readonly ima: IMA; readonly seed: Seed},
  t3: T3
): Specimen {
  const minMax = facet.cell.halfedges.reduce(
    (sum, half) => {
      const xy = half.getEndpoint()
      return {
        min: {x: Math.min(xy.x, sum.min.x), y: Math.min(xy.y, sum.min.y)},
        max: {x: Math.max(xy.x, sum.max.x), y: Math.max(xy.y, sum.max.y)}
      }
    },
    {min: {x: Infinity, y: Infinity}, max: {x: -Infinity, y: -Infinity}}
  )

  const start = facet.cell.halfedges[0]!.getStartpoint()
  const poly = [{x: start.x, y: start.y}]
  for (const half of facet.cell.halfedges) {
    const pt = half.getEndpoint()
    poly.push({x: pt.x, y: pt.y})
  }

  return {
    chips: facet.chips,
    h: minMax.max.y - minMax.min.y,
    ima: seed.ima,
    origin: minMax.min,
    poly,
    seed: seed.seed,
    t3,
    w: minMax.max.x - minMax.min.x
  }
}
