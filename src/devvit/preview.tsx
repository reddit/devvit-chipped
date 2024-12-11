import {Devvit} from '@devvit/public-api'
import {playButtonWidth} from '../shared/theme.js'
import {newFacets} from '../shared/types/facet.js'
import type {IMA} from '../shared/types/ima.js'
import {Random, type Seed} from '../shared/types/random.js'
import {Title} from './title.js'

export function Preview(props: {ima: IMA; seed: Seed}): JSX.Element {
  const svg = newFacets(new Random(props.seed), props.ima).svg
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
