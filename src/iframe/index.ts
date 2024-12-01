import '../shared/types/voronoi.d.ts' // https://github.com/microsoft/TypeScript/issues/29002

import pkg from '../../package.json' with {type: 'json'}
import {Player, PostSeed, Specimen} from '../shared/save.ts'
import {newFacets} from '../shared/types/facet.ts'
import type {DevvitSystemMessage} from '../shared/types/message.js'
import {Random, type Seed, randomEndSeed} from '../shared/types/random.js'
import {noT3} from '../shared/types/tid.ts'
import type {UTCMillis} from '../shared/types/time.js'
import {Engine} from './engine.js'

const engine = await Engine.new()
engine.start()

// to-do: compile-time constant to enable dead code removal.
const noDevvit = location.port === '1234'

console.log(`${pkg.name} v${pkg.version}`)

if (noDevvit) {
  const rnd = new Random((Date.now() % randomEndSeed) as Seed)
  // rnd.seed = 1 as Seed
  console.log(`seed=${rnd.seed}`)
  const seed = PostSeed(rnd)
  const delay = rnd.num * 1_000
  const p1 = Player({
    snoovatarURL:
      'https://i.redd.it/snoovatar/avatars/a67a8a09-fb44-4041-8073-22e89210961d.png',
    t2: 't2_k6ldbjh3',
    username: 'stephenoid'
  })
  p1.chips = rnd.num * 99999
  while (rnd.num > 0.01) {
    const seed = PostSeed(rnd)
    const facet = newFacets(new Random(seed.seed)).facets.find(
      facet => facet.specimen
    )!
    p1.codex[seed.ima] = Specimen(facet, seed, noT3)
  }
  setTimeout(
    () =>
      engine._onMsg(
        new MessageEvent<DevvitSystemMessage>('message', {
          data: {
            type: 'devvit-message',
            data: {
              message: {
                author: {
                  snoovatarURL:
                    'https://i.redd.it/snoovatar/avatars/d87d7eb2-f063-424a-8e30-f02e3347ef0e.png',
                  t2: 't2_reyi3nllt',
                  username: 'likeoid'
                },
                created: 1731902370070 as UTCMillis,
                debug: true,
                seed,
                type: 'Init',
                p1,
                t3: 't3_1gtql6y'
              }
            }
          }
        })
      ),
    delay
  )
}
