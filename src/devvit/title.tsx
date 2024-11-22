import {Devvit} from '@devvit/public-api'
import {minCanvasWH, paletteWhite} from '../shared/theme.ts'

export type Titlerops = {children?: JSX.Children; svg: string}

export function Title(props: Readonly<Titlerops>): JSX.Element {
  return (
    <zstack
      alignment='top center'
      backgroundColor={paletteWhite}
      width='100%'
      height='100%'
    >
      <vstack width='100%'>
        <spacer height='32px' />
        {/* hack: DXC-911 blocks doesn't support webp translucency. */}
        <image
          description='chipped'
          url='logo.png'
          imageWidth='452px'
          imageHeight='62px'
          resizeMode='fit'
          width='100%'
        />
      </vstack>
      <image
        description='rock'
        url={props.svg}
        imageWidth={`${minCanvasWH.w}px`}
        imageHeight={`${minCanvasWH.h}px`}
      />
      <vstack
        alignment='middle center'
        gap='large'
        padding='large'
        width='100%'
        height='100%'
      >
        <vstack
          width='100%'
          alignment='middle center'
          gap='medium'
          padding='large'
        >
          {props.children}
        </vstack>
      </vstack>
    </zstack>
  )
}
