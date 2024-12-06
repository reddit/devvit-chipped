import {
  type Context,
  Devvit,
  type JobContext,
  type Post,
  type RedditAPIClient
} from '@devvit/public-api'
import {Player, type PostSave, type PostSeed} from '../shared/save.ts'
import {type T2, anonSnoovatarURL, anonUsername} from '../shared/types/tid.ts'
import {Preview} from './preview.tsx'

Devvit.configure({redditAPI: true})

/** create a new post as the viewer. */
export async function r2CreatePost(
  ctx: Context | JobContext,
  seed: Readonly<PostSeed>
): Promise<Post> {
  if (!ctx.subredditName) throw Error('no sub name')

  const hex = seed.seed.toString(16)

  // requires special permission: post as viewer.
  const post = await ctx.reddit.submitPost({
    preview: <Preview ima={seed.ima} seed={seed.seed} />,
    subredditName: ctx.subredditName,
    title: `Rock ${hex}${seed.locality ? ` at ${seed.locality}` : ''}`
  })

  const user = await ctx.reddit.getCurrentUser()
  console.log(`rock ${hex} posted by ${user?.username ?? 'chippedgame'}`)

  return post
}

export function r2OpenPost(
  ctx: Context,
  r2Post: Post,
  post: Readonly<PostSave>
): void {
  ctx.ui.showToast({
    appearance: 'success',
    text: `Chipped rock ${post.seed.seed.toString(16)} posted.`
  })
  ctx.ui.navigateTo(r2Post)
}

export async function r2Player(r2: RedditAPIClient, t2: T2): Promise<Player> {
  const user = await r2.getCurrentUser()
  // hack: why can't this be propulated in User?
  const snoovatarURL = (await user?.getSnoovatarUrl()) ?? anonSnoovatarURL
  return Player({snoovatarURL, t2, username: user?.username ?? anonUsername})
}
