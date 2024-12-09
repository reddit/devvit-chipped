import type {Game} from '../types/game.ts'
import {type Layer, layerDrawOrder} from '../types/layer.ts'
import {type ButtonEnt, buttonEntDraw, buttonEntUpdate} from './button-ent.ts'
import {type CursorEnt, cursorEntDraw, cursorEntUpdate} from './cursor-ent.ts'
import type {EID} from './eid.ts'
import {type FacetEnt, facetEntDraw, facetEntUpdate} from './facet-ent.ts'
import {
  type CodexLevelEnt,
  codexLevelEntDraw,
  codexLevelEntUpdate
} from './levels/codex-level-ent.ts'
import {
  type HelpLevelEnt,
  helpLevelEntDraw,
  helpLevelEntUpdate
} from './levels/help-level-ent.ts'
import {
  type RockLevelEnt,
  rockLevelEntDraw,
  rockLevelEntUpdate
} from './levels/rock-level-ent.ts'
import {
  type ScoreboardLevelEnt,
  scoreboardLevelEntDraw,
  scoreboardLevelEntUpdate
} from './levels/scoreboard-level-ent.ts'
import {
  type ShopLevelEnt,
  shopLevelEntDraw,
  shopLevelEntUpdate
} from './levels/shop-level-ent.ts'
import {type PagerEnt, pagerEntDraw, pagerEntUpdate} from './pager-ent.ts'
import {
  type RockStatusEnt,
  rockStatusEntDraw,
  rockStatusEntUpdate
} from './rock-status.ts'
import {
  type ToolbeltEnt,
  toolbeltEntDraw,
  toolbeltEntUpdate
} from './toolbelt-ent.ts'

export type Ent =
  | ButtonEnt
  | CursorEnt
  | FacetEnt
  | LevelEnt
  | PagerEnt
  | RockStatusEnt
  | ToolbeltEnt

export type LevelEnt =
  | CodexLevelEnt
  | HelpLevelEnt
  | RockLevelEnt
  | ScoreboardLevelEnt
  | ShopLevelEnt

type EntByID = {[eid: EID]: Ent}
type EntsByLayer = {[layer in Layer]: EntByID}

function EntsByLayer(): EntsByLayer {
  return Object.fromEntries(
    layerDrawOrder.map(layer => [layer, {}])
  ) as EntsByLayer
}

export class Zoo {
  #entsByLayer: Readonly<EntsByLayer> = EntsByLayer()
  #lvl: LevelEnt | undefined

  clear(): void {
    this.#entsByLayer = EntsByLayer()
  }

  draw(game: Game): void {
    for (const layer of layerDrawOrder) {
      game.c2d.save()
      if (layer !== 'Cursor' && layer !== 'Level' && !layer.startsWith('UI'))
        game.c2d.translate(-game.cam.x, -game.cam.y)

      for (const ent of Object.values(this.#entsByLayer[layer])) {
        switch (ent.type) {
          case 'Button':
            buttonEntDraw(ent, game)
            break
          case 'CodexLevel':
            codexLevelEntDraw(ent, game)
            break
          case 'Cursor':
            cursorEntDraw(ent, game)
            break
          case 'Facet':
            facetEntDraw(ent, game)
            break
          case 'HelpLevel':
            helpLevelEntDraw(ent, game)
            break
          case 'Pager':
            pagerEntDraw(ent, game)
            break
          case 'RockLevel':
            rockLevelEntDraw(ent, game)
            break
          case 'RockStatus':
            rockStatusEntDraw(ent, game)
            break
          case 'ScoreboardLevel':
            scoreboardLevelEntDraw(ent, game)
            break
          case 'ShopLevel':
            shopLevelEntDraw(ent, game)
            break
          case 'Toolbelt':
            toolbeltEntDraw(ent, game)
            break
          default:
            ent satisfies never
        }
      }
      game.c2d.restore()
    }
  }

  find(eid: EID): Ent | undefined {
    for (const layer in this.#entsByLayer)
      if (this.#entsByLayer[layer as Layer][eid])
        return this.#entsByLayer[layer as Layer][eid]
  }

  get lvl(): LevelEnt | undefined {
    return this.#lvl
  }

  /** only an ent's layer is replaced. */
  replace(...ents: readonly Readonly<Ent>[]): void {
    for (const ent of ents) {
      if (ent.type.endsWith('Level')) this.#lvl = ent as LevelEnt
      this.#entsByLayer[ent.layer][ent.eid] = ent
      if ('ents' in ent) this.replace(...Object.values(ent.ents))
    }
  }

  update(game: Game): void {
    for (const ent of this.ents('Reverse')) {
      switch (ent.type) {
        case 'Button':
          buttonEntUpdate(ent, game)
          break
        case 'CodexLevel':
          codexLevelEntUpdate(ent, game)
          break
        case 'Cursor':
          cursorEntUpdate(ent, game)
          break
        case 'Facet':
          facetEntUpdate(ent, game)
          break
        case 'HelpLevel':
          helpLevelEntUpdate(ent, game)
          break
        case 'Pager':
          pagerEntUpdate(ent, game)
          break
        case 'RockLevel':
          rockLevelEntUpdate(ent, game)
          break
        case 'RockStatus':
          rockStatusEntUpdate(ent, game)
          break
        case 'ScoreboardLevel':
          scoreboardLevelEntUpdate(ent, game)
          break
        case 'ShopLevel':
          shopLevelEntUpdate(ent, game)
          break
        case 'Toolbelt':
          toolbeltEntUpdate(ent, game)
          break
        default:
          ent satisfies never
      }
    }
  }

  remove(...ents: readonly Readonly<Ent>[]): void {
    for (const ent of ents) {
      for (const layer of Object.values(this.#entsByLayer)) {
        if (!layer[ent.eid]) continue
        delete layer[ent.eid]
        break
      }
    }
  }

  *ents(dir: 'Forward' | 'Reverse' = 'Forward'): Generator<Ent> {
    const order =
      dir === 'Reverse' ? toReversed(layerDrawOrder) : layerDrawOrder
    for (const layer of order)
      for (const ent of Object.values(this.#entsByLayer[layer])) yield ent
  }
}

function toReversed<T>(arr: readonly T[]): T[] {
  const reversed = []
  for (let i = arr.length; i; i--) reversed.push(arr[i - 1]!)
  return reversed
}
