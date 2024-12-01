import {Devvit} from '@devvit/public-api'
import {minCanvasWH, paletteBlack, paletteWhite} from '../shared/theme.ts'

export type TitleProps = {children?: JSX.Children; svg: string}

export function Title(props: Readonly<TitleProps>): JSX.Element {
  return (
    <zstack
      alignment='top center'
      backgroundColor={paletteWhite}
      borderColor={paletteBlack}
      width='100%'
      height='100%'
    >
      <vstack alignment='start' width='100%' padding='medium'>
        {/* hack: DXC-911 blocks doesn't support webp translucency. */}
        <image
          description='chipped'
          url='logo.png'
          imageWidth='171px'
          imageHeight='49px'
        />
      </vstack>
      <image
        description='rock'
        url={props.svg}
        imageWidth={`${minCanvasWH.w}px`}
        imageHeight={`${minCanvasWH.h}px`}
      />
      <vstack
        alignment='bottom end'
        padding='medium'
        width='100%'
        height='100%'
      >
        {props.children ?? null}
      </vstack>
    </zstack>
  )
}
