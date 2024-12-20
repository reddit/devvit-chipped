import {minCatSet} from '../shared/min-cat/min-cat.ts'
import {minCanvasWH} from '../shared/theme.ts'
import type {DevvitSystemMessage} from '../shared/types/message.ts'
import {Random} from '../shared/types/random.ts'
import {Rock} from '../shared/types/rock.ts'
import {type UTCMillis, utcMillisNow} from '../shared/types/time.ts'
import {CursorEnt} from './ents/cursor-ent.ts'
import {EIDFactory} from './ents/eid.ts'
import {RockLevelEnt} from './ents/levels/rock-level-ent.ts'
import {ToolbeltEnt} from './ents/toolbelt-ent.ts'
import {Zoo} from './ents/zoo.ts'
import {Input} from './input/input.ts'
import {Looper} from './looper.ts'
import {postMessage} from './mail.ts'
import {Assets, loadImage} from './types/assets.ts'
import {Audio} from './types/audio.ts'
import {Cam, camNativeWH, camScale} from './types/cam.ts'
import {drawClear} from './types/draw.ts'
import {type LoadedGame, isGame, isInitGame} from './types/game.ts'

declare global {
  // hack: fix type.
  interface FontFaceSet {
    add(font: FontFace): FontFaceSet
  }
}

export class Engine {
  static async new(): Promise<Engine> {
    const assets = await Assets()
    return new Engine(assets, await Audio(assets))
  }

  _game: LoadedGame
  #looper: Looper

  private constructor(assets: Assets, audio: Audio) {
    const canvas = document.querySelector('canvas')
    if (!canvas) throw Error('no canvas')
    document.fonts.add(assets.font)

    const cam = new Cam()
    cam.minWH = {w: minCanvasWH.w, h: minCanvasWH.h}
    const ctrl = new Input(cam, canvas)
    ctrl.mapDefault()
    const eid = new EIDFactory()
    const zoo = new Zoo()
    this._game = {
      audio: audio.ctx,
      debug: false,
      cam,
      canvas,
      area: 0,
      codex: {found: undefined, foundTriggered: false},
      ctrl,
      cursor: CursorEnt(eid),
      eid,
      img: assets.img,
      now: 0 as UTCMillis,
      snoovatar: {},
      sound: audio,
      toolbelt: ToolbeltEnt(cam, eid),
      zoo
    }

    this.#looper = new Looper(
      assets,
      this._game.canvas,
      this._game.cam,
      this._game.ctrl
    )
    this.#looper.onPause = this.#onPause
    this.#looper.onResize = this.#onResize
    this.#looper.onResume = this.#onResume
  }

  start(): void {
    addEventListener('message', this._onMsg)
    postMessage({type: 'Loaded'})
    this._game.ctrl.register('add')
  }

  #onLoop = (): void => {
    this.#looper.loop = this.#onLoop

    if (this._game.ctrl.pointOn && this._game.audio.state !== 'running')
      void this._game.audio.resume() // don't await; this can hang.

    if (this.#looper.draw) {
      this._game.draw = this.#looper.draw // to-do: we should give looper Draw.
      this._game.c2d = this.#looper.draw.c2d
    } else {
      delete this._game.draw
      delete this._game.c2d
    }
    this._game.now = utcMillisNow()

    if (!isGame(this._game)) return

    drawClear(this._game.c2d, this._game.cam)

    this._game.zoo.update(this._game)
    this._game.zoo.draw(this._game)
  }

  _onMsg = async (ev: MessageEvent<DevvitSystemMessage>): Promise<void> => {
    // hack: filter unknown messages.
    if (ev.data.type !== 'devvit-message') return

    const msg = ev.data.data.message
    if (this._game.debug || msg.debug)
      console.log(`iframe received msg=${JSON.stringify(msg)}`)

    switch (msg.type) {
      case 'Init': {
        this._game.debug = msg.debug
        this._game.seed = msg.seed
        this._game.rnd = new Random(msg.seed.seed)
        this._game.chips = Rock(this._game.rnd, msg.seed.ima).chips
        this._game.shop = {
          inven: [
            {
              bought: false,
              dud: this._game.rnd.num < 0.9,
              rock: Rock(
                this._game.rnd,
                minCatSet[Math.trunc(this._game.rnd.num * minCatSet.length)]!
                  .ima
              )
            },
            {
              bought: false,
              dud: this._game.rnd.num < 0.9,
              rock: Rock(
                this._game.rnd,
                minCatSet[Math.trunc(this._game.rnd.num * minCatSet.length)]!
                  .ima
              )
            },
            {
              bought: false,
              dud: this._game.rnd.num < 0.9,
              rock: Rock(
                this._game.rnd,
                minCatSet[Math.trunc(this._game.rnd.num * minCatSet.length)]!
                  .ima
              )
            }
          ]
        }
        this._game.p1 = msg.p1
        this._game.t3 = msg.t3
        this._game.scoreboard = msg.scoreboard

        const urls = [
          msg.p1.profile.snoovatarURL,
          ...msg.scoreboard.map(player => player.profile.snoovatarURL)
        ]
        const imgs = await Promise.all(urls.map(url => loadImage(url)))
        this._game.snoovatar = imgs.reduce(
          (sum, img) => ({
            // biome-ignore lint/performance/noAccumulatingSpread:
            ...sum,
            [img.src]: img
          }),
          {}
        )

        if (!isInitGame(this._game)) throw Error('no init game')

        this._game.zoo.replace(RockLevelEnt(this._game))
        this.#looper.register('add', this._game.rnd)
        this.#looper.loop = this.#onLoop
        this._game.canvas.style.display = 'block' // no line height spacing.
        break
      }

      default:
        msg.type satisfies never
    }
  }

  #onPause = (): void => {
    console.log('paused')
  }

  #onResize = (): void => {
    const {cam} = this._game

    cam.minWH = camNativeWH()

    // don't truncate xy to avoid sawtooth movement.
    // cam.x = p1.x - Math.trunc(canvas.width / 2)
    // cam.y = p1.y - Math.trunc(canvas.height / 2)

    cam.x =
      -cam.w / 2 + (minCanvasWH.w * camScale(minCanvasWH, 1, 0, false)) / 2
    cam.y =
      -cam.h / 2 + (minCanvasWH.h * camScale(minCanvasWH, 1, 0, false)) / 2
  }

  #onResume = (): void => {
    console.log('resume')
  }
}
