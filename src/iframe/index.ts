import '../shared/types/voronoi.d.ts' // https://github.com/microsoft/TypeScript/issues/29002

import pkg from '../../package.json' with {type: 'json'}
import {Player, PostSeed, type Profile, Specimen} from '../shared/save.ts'
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
  p1.minerals = Object.values(p1.codex).reduce(
    (sum, specimen) => sum + specimen.chips,
    0
  )
  const profiles: Profile[] = [
    {
      snoovatarURL:
        'https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfNjIyZDhmZWE0NjAzYmE5ZWRhZjEwODRiNDA3MDUyZDhiMGE5YmVkN18yOTI4NDYx_rare_424c56f3-a85d-43c2-a088-6384955555a1.png',
      t2: 't2_mdn67zkp',
      username: 'cedaraspen'
    },
    {
      snoovatarURL:
        'https://www.redditstatic.com/shreddit/assets/thinking-snoo.png',
      t2: 't2_vw5x123d',
      username: 'ChatGPTTookMyJob'
    },
    {
      snoovatarURL:
        'https://i.redd.it/snoovatar/avatars/84cd9efa-8cef-4bf1-bfb0-f774c4295a8f.png',
      t2: 't2_t1mxkn9d',
      username: 'FlyingLaserTurtle'
    },
    {
      snoovatarURL:
        'https://i.redd.it/snoovatar/avatars/d87d7eb2-f063-424a-8e30-f02e3347ef0e.png',
      t2: 't2_reyi3nllt',
      username: 'likeoid'
    },
    {
      snoovatarURL:
        'https://www.redditstatic.com/shreddit/assets/thinking-snoo.png',
      t2: 't2_1bgenlvxgq',
      username: 'Minimum_Solid7428'
    },
    {
      snoovatarURL:
        'https://i.redd.it/snoovatar/avatars/a8d67e91-64a2-48ed-98b1-85bdd9d61d13.png',
      t2: 't2_uxu53cio',
      username: 'neuralspikes'
    },
    {
      snoovatarURL:
        'https://i.redd.it/snoovatar/avatars/985f6cf8-1304-4dbf-8569-0a93ba7021ef.png',
      t2: 't2_7u315kgs',
      username: 'Oppdager'
    },
    {
      snoovatarURL:
        'https://www.redditstatic.com/shreddit/assets/thinking-snoo.png',
      t2: 't2_hbbuxlhe5',
      username: 'pizzaoid'
    },
    {
      snoovatarURL:
        'https://i.redd.it/snoovatar/avatars/a67a8a09-fb44-4041-8073-22e89210961d.png',
      t2: 't2_k6ldbjh3',
      username: 'stephenoid'
    },
    {
      snoovatarURL:
        'https://i.redd.it/snoovatar/avatars/35b99d7e-7935-42d6-9281-7a8f5bd6d093.png',
      t2: 't2_3kh50',
      username: 'youngluck'
    }
  ]
  const scoreboard = profiles.map(profile => ({
    chips: rnd.num * 1024 * 10_000,
    codex: {},
    minerals: rnd.num * 1024 * 100,
    profile,
    rocks: Array(Math.round(rnd.num * 10_000)).fill(noT3)
  }))
  scoreboard.sort((lhs, rhs) => rhs.minerals - lhs.minerals)

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
                scoreboard,
                t3: 't3_1gtql6y'
              }
            }
          }
        })
      ),
    delay
  )
}
