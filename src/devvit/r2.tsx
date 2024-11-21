import {
  type Context,
  Devvit,
  type JobContext,
  type Post
} from '@devvit/public-api'
import {Preview} from './preview.tsx'
import type {PostRecord} from './record.ts'

Devvit.configure({redditAPI: true})

/** create a new post as the viewer. */
export async function r2CreatePost(
  ctx: Context | JobContext,
  seed: number
): Promise<Post> {
  if (!ctx.subredditName) throw Error('no sub name')

  const hex = seed.toString(16)

  // requires special permission: post as viewer.
  const post = await ctx.reddit.submitPost({
    preview: <Preview />,
    subredditName: ctx.subredditName,
    title: `Chipped Rock ${hex}`
  })

  console.log(`rock ${hex} posted by ${ctx.userId ?? 'chippedgame'}`)

  return post
}

export function r2OpenPost(
  ctx: Context,
  r2Post: Post,
  post: Readonly<PostRecord>
): void {
  ctx.ui.showToast({
    appearance: 'success',
    text: `Chipped rock ${post.seed.toString(16)} posted.`
  })
  ctx.ui.navigateTo(r2Post)
}
