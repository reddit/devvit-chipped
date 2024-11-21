import {Devvit} from '@devvit/public-api'
import {paletteBlack} from '../shared/theme.js'

export const previewVersion: number = 0

export function Preview(): JSX.Element {
  // to-do: get initial state here so the seed style is correct.
  // hack: no way to pass initial state from preview to app.
  // to-do: this should be a golf bag silhouette or tiled pattern.
  return (
    <vstack
      width='100%'
      height='100%'
      alignment='center middle'
      backgroundColor={paletteBlack}
    >
      <image
        url='loading.gif'
        description='loading…'
        height='140px'
        width='140px'
        imageHeight='240px'
        imageWidth='240px'
      />
    </vstack>
  )
}
