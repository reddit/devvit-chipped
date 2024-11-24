import pkg from '../../package.json' with {type: 'json'}
import type {DevvitSystemMessage} from '../shared/types/message.js'
import {Player} from '../shared/types/player.js'
import {randomEndSeed} from '../shared/types/random.js'
import type {UTCMillis} from '../shared/types/time.js'
import {Engine} from './engine.js'

const engine = await Engine.new()
engine.start()

const noDevvit = location.port === '1234'

console.log(`${pkg.name} v${pkg.version}`)

if (noDevvit) {
  const delay = Math.random() * 1_000
  const seed = Date.now() % randomEndSeed
  console.log(`delay=${delay} seed=${seed}`)
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
                p1: Player({
                  snoovatarURL:
                    'https://i.redd.it/snoovatar/avatars/a67a8a09-fb44-4041-8073-22e89210961d.png',
                  t2: 't2_k6ldbjh3',
                  username: 'stephenoid'
                }),
                t3: 't3_1gtql6y'
              }
            }
          }
        })
      ),
    delay
  )
}
