// biome-ignore lint/style/useImportType: Devvit is a functional dependency of JSX.
import {Devvit} from '@devvit/public-api'
import type {Context, UseStateResult} from '@devvit/public-api'
import {PlaySave, type Player, PostSave, PostSeed} from '../shared/save.js'
import {paletteWhite, playButtonWidth, scoreboardSize} from '../shared/theme.js'
import {newFacets} from '../shared/types/facet.js'
import type {DevvitMessage, WebViewMessage} from '../shared/types/message.js'
import {Random, type Seed, randomEndSeed} from '../shared/types/random.js'
import {T2, T3, anonSnoovatarURL, anonUsername} from '../shared/types/tid.js'
import {r2CreatePost, r2OpenPost} from './r2.js'
import {
  T3T2,
  redisCreatePlay,
  redisQueryLeaderboard,
  redisQueryP1,
  redisQueryPlay,
  redisQueryPlayer,
  redisQueryPost,
  redisSetPlayer,
  redisSetPost
} from './redis.js'
import {Title} from './title.js'
import {useState2} from './use-state2.js'

export function App(ctx: Devvit.Context): JSX.Element {
  const debug = 'chipped' in ctx.debug

  if (!ctx.postId) throw Error('no T3')
  const [post] = useState2(redisQueryPost(ctx.redis, T3(ctx.postId)))
  if (!post) throw Error('no post record')

  // PlayerRecord is an irreconcilable save slot. defer loading to decrease the
  // chance of overwriting another session.
  const [p1, setP1] = useState2<Player | undefined>(undefined)

  if (!ctx.userId) throw Error('no T2')
  const t2 = T2(ctx.userId)
  const [play, setPlay] = useState2(
    redisQueryPlay(ctx.redis, T3T2(post.t3, t2))
  )

  let [launch, setLaunch] = useState2(false)
  let [loading, setLoading] = useState2(false)

  // hack: no meaningful way to distinguish posts without a web view? make a
  //       data SVG. this is big. if you get a 36 and no logs, it's likely a
  //       context overflow (DXC-916) and needs to be computed on every render
  //       instead. also, the SVG parser needs an unencoded `<svg` prefix
  //       (DXC-914) and no single quotes (DXC-912). also, the compute logger
  //       will truncate the URL if you try to log it. finally, post previews
  //       don't support Context or useState() so you have to pass by prop.
  const [svg] = useState2(
    () => newFacets(new Random(post.seed.seed), post.seed.ima).svg
  )

  if (launch)
    return WebView(
      ctx,
      debug,
      [launch, setLaunch],
      [p1, setP1],
      [play, setPlay],
      post,
      t2
    )

  return (
    <Title svg={svg}>
      {/* biome-ignore lint/a11y/useButtonType: */}
      <button
        appearance='bordered'
        disabled={loading}
        size='large'
        minWidth={`${playButtonWidth}px`}
        icon={play == null ? 'play-outline' : 'new-outline'}
        onPress={async () => {
          if (loading) return // hack: disabled isn't fast enough.
          setLoading((loading = true))
          if (play == null) setLaunch((launch = true))
          else await createPost(ctx, [p1, setP1], t2)
        }}
      >
        {play == null ? 'play' : 'new game'}
      </button>
    </Title>
  )
}

function WebView(
  ctx: Devvit.Context,
  debug: boolean,
  [launch, setLaunch]: UseStateResult<boolean>,
  [p1, setP1]: UseStateResult<Player | undefined>,
  [play, setPlay]: UseStateResult<PlaySave | undefined>,
  post: PostSave,
  t2: T2
): JSX.Element {
  return (
    // to-do: zstack with loading gif or even title screen until Loaded message
    //        is received. as long as webview isn't torn down.
    <vstack
      width='100%'
      height='100%'
      alignment='middle center'
      backgroundColor={paletteWhite}
    >
      <webview
        id='web-view'
        onMessage={msg =>
          onMsg(
            ctx,
            debug,
            [launch, setLaunch],
            [p1, setP1],
            [play, setPlay],
            post,
            msg as WebViewMessage,
            t2
          )
        }
        url='index.html'
        width='100%'
        height='100%'
      />
    </vstack>
  )
}

async function onMsg(
  ctx: Context,
  debug: boolean,
  [_launch, setLaunch]: UseStateResult<boolean>,
  [p1, setP1]: UseStateResult<Player | undefined>,
  [play, setPlay]: UseStateResult<PlaySave | undefined>,
  post: PostSave,
  msg: WebViewMessage,
  t2: T2
): Promise<void> {
  if (debug)
    console.log(
      `${p1?.profile.username ?? anonUsername} app received msg=${JSON.stringify(msg)}`
    )

  switch (msg.type) {
    case 'Loaded': {
      p1 = await redisQueryP1(ctx, t2)
      p1.rocks.push(post.t3)
      setP1(p1)
      setPlay((play = PlaySave(p1.profile.t2, post.t3)))
      await redisCreatePlay(ctx.redis, play, p1.profile.t2)
      const author = await ctx.reddit.getUserById(post.author)

      const t2s = await redisQueryLeaderboard(ctx.redis)
      const scoreboard = []
      for (let i = 0; i < scoreboardSize && i < t2s.length; i++) {
        const player = await redisQueryPlayer(ctx.redis, t2s[i]!)
        if (player) scoreboard.push(player)
      }

      ctx.ui.webView.postMessage<DevvitMessage>('web-view', {
        type: 'Init',
        author: {
          snoovatarURL: (await author?.getSnoovatarUrl()) ?? anonSnoovatarURL,
          t2: post.author,
          username: author?.username ?? anonUsername
        },
        created: post.created,
        debug,
        p1,
        scoreboard,
        seed: post.seed,
        t3: post.t3
      })
      break
    }
    case 'NewGame': {
      setLaunch((_launch = false))
      const post = await createPost(ctx, [msg.p1, setP1], t2)
      msg.p1.rocks.push(post.t3)
      setP1((p1 = msg.p1))
      await redisSetPlayer(ctx.redis, msg.p1)
      // to-do: notify in game UI too and disable button.
      break
    }
    case 'Save':
      await redisSetPlayer(ctx.redis, msg.p1)
      setP1((p1 = msg.p1))
      break
    default:
      msg satisfies never
      break
  }
}

// to-do: add loading state to cue user.
async function createPost(
  ctx: Context,
  [p1, setP1]: UseStateResult<Player | undefined>,
  t2: T2
): Promise<PostSave> {
  const seed = PostSeed(
    new Random(Math.trunc(Math.random() * randomEndSeed) as Seed)
  )
  const r2Post = await r2CreatePost(ctx, seed)
  const post = PostSave(r2Post, seed)
  if (!p1) p1 = await redisQueryP1(ctx, t2)
  p1.rocks.push(post.t3)
  setP1(p1)
  await Promise.all([
    redisSetPost(ctx.redis, post),
    redisSetPlayer(ctx.redis, p1)
  ])
  r2OpenPost(ctx, r2Post, post)
  return post
}
