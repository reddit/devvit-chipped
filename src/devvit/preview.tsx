import {Devvit} from '@devvit/public-api'
import {newFacets} from '../shared/types/facet.js'
import {Random} from '../shared/types/random.js'
import {Title} from './title.js'

export const previewVersion: number = 0

export function Preview(props: {seed: number}): JSX.Element {
  const svg = newFacets(new Random(props.seed)).svg
  return (
    <Title svg={svg}>
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
