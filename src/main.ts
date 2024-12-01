import {
  type Context,
  Devvit,
  type FormKey,
  type FormOnSubmitEvent,
  type JobContext
} from '@devvit/public-api'
import {App} from './devvit/app.tsx'
import {r2CreatePost, r2OpenPost} from './devvit/r2.tsx'
import {redisQueryP1, redisSetPlayer, redisSetPost} from './devvit/redis.ts'
import {PostSave, PostSeed} from './shared/save.ts'
import {Random, type Seed, randomEndSeed} from './shared/types/random.ts'

const newPostScheduleJob: string = 'NewPostSchedule'

Devvit.addCustomPostType({name: 'Rock', height: 'regular', render: App})

Devvit.addMenuItem({
  label: 'New Chipped Rock Post',
  location: 'subreddit',
  onPress: async (_ev, ctx) => createPost(ctx, 'UI')
})

const postScheduleForm: FormKey = Devvit.createForm(
  {
    acceptLabel: 'Save',
    description:
      'Post every x hours (0-23) and y minutes (0-59); zero period to disable.',
    fields: [
      {name: 'hours', label: 'x Hours', required: true, type: 'number'},
      {name: 'mins', label: 'y Minutes', required: true, type: 'number'}
    ],
    title: 'Chipped Rock Post Schedule'
  },
  onSavePostSchedule
)

async function onSavePostSchedule(
  ev: FormOnSubmitEvent<{readonly hours: number; readonly mins: number}>,
  ctx: Context
): Promise<void> {
  const {hours, mins} = ev.values
  for (const job of await ctx.scheduler.listJobs()) {
    console.log(`canceling rock job ${job.name} (${job.id})`)
    await ctx.scheduler.cancelJob(job.id)
  }

  if (
    hours < 0 ||
    mins < 0 ||
    !Number.isInteger(hours) ||
    !Number.isInteger(mins) ||
    (!hours && !mins)
  ) {
    console.log('unscheduled recurring rock posts')
    ctx.ui.showToast('Unscheduled recurring Chipped rock posts.')
    return
  }

  await ctx.scheduler.runJob({
    name: newPostScheduleJob,
    cron: `*/${mins} */${hours} * * *`
  })
  ctx.ui.showToast(
    `Scheduled recurring Chipped rock posts every ${hours} hour(s) and ${mins} minute(s).`
  )
  console.log(
    `scheduled recurring rock posts every ${hours} hours(s) and ${mins} minute(s)`
  )
}

Devvit.addSchedulerJob<undefined>({
  name: newPostScheduleJob,
  onRun: (_ev, ctx) => createPost(ctx, 'NoUI')
})

Devvit.addMenuItem({
  label: 'Schedule / Cancel Recurring Chipped Rock Posts',
  location: 'subreddit',
  onPress: (_ev, ctx) => ctx.ui.showForm(postScheduleForm)
})

// to-do: probably better to schema upgrade when viewing a post than on app
// upgrade trigger to avoid having to partition across scheduled jobs? should
// include post.setCustomPostPreview(…).

async function createPost(
  ctx: Context | JobContext,
  mode: 'UI' | 'NoUI'
): Promise<void> {
  const seed = PostSeed(
    new Random(Math.trunc(Math.random() * randomEndSeed) as Seed)
  )
  const r2Post = await r2CreatePost(ctx, seed)
  const post = PostSave(r2Post, seed)
  const p1 = await redisQueryP1(ctx)
  p1.rocks.push(post.t3)
  await Promise.all([
    redisSetPost(ctx.redis, post),
    redisSetPlayer(ctx.redis, p1)
  ])
  if (mode === 'UI') r2OpenPost(ctx as Context, r2Post, post)
}

export default Devvit
