import {
  type Context,
  Devvit,
  type JobContext,
  type Post
} from '@devvit/public-api'
import {newFacets} from '../shared/types/facet.ts'
import {Random} from '../shared/types/random.ts'
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

  const {svg} = newFacets(new Random(seed))

  // requires special permission: post as viewer.
  const post = await ctx.reddit.submitPost({
    preview: <Preview svg={svg} />,
    subredditName: ctx.subredditName,
    title: `Rock ${hex}`
  })

  const user = await ctx.reddit.getCurrentUser()
  console.log(`rock ${hex} posted by ${user?.username ?? 'chippedgame'}`)

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
