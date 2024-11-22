import {type Context, Devvit} from '@devvit/public-api'
import {Title} from './title.js'

export const previewVersion: number = 0

export function Preview(props: {svg: string}, _ctx: Context): JSX.Element {
  // hack: ctx.postId and useState() are busted in preview.
  // const [post] = useState2(async () => {
  //   if (ctx.postId) return await redisQueryPost(ctx.redis, T3(ctx.postId))
  // })

  // hack: no way to pass initial state from preview to app.
  return (
    <Title svg={props.svg}>
      <image
        url='loading.gif'
        description='loading…'
        height='140px'
        width='140px'
        imageHeight='240px'
        imageWidth='240px'
      />
    </Title>
  )
}
