import {Devvit} from '@devvit/public-api'
import {playButtonWidth} from '../shared/theme.js'
import {newFacets} from '../shared/types/facet.js'
import {Random, type Seed} from '../shared/types/random.js'
import {Title} from './title.js'

export const previewVersion: number = 0

export function Preview(props: {seed: Seed}): JSX.Element {
  const svg = newFacets(new Random(props.seed)).svg
  return (
    <Title svg={svg}>
      <vstack alignment='middle center' width={`${playButtonWidth}px`}>
        {/* to-do: theme loading.gif. */}
        <image
          url='loading.gif'
          description='loading…'
          height='60px'
          width='60px'
          imageHeight='240px'
          imageWidth='240px'
        />
      </vstack>
    </Title>
  )
}
