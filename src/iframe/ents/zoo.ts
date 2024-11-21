import type {Game} from '../types/game.ts'
import {type Layer, layerDrawOrder} from '../types/layer.ts'
import {type CursorEnt, cursorEntDraw, cursorEntUpdate} from './cursor-ent.ts'
import type {EID} from './eid.ts'
import {type FacetEnt, facetEntDraw, facetEntUpdate} from './facet-ent.ts'
import {
  type MineLevelEnt,
  mineLevelEntDraw,
  mineLevelEntUpdate
} from './levels/mine-level-ent.ts'
import {
  type ToolbeltEnt,
  toolbeltEntDraw,
  toolbeltEntUpdate
} from './toolbelt-ent.ts'

export type Ent = MineLevelEnt | CursorEnt | FacetEnt | ToolbeltEnt

type EntByID = {[eid: EID]: Ent}
type EntsByLayer = {[layer in Layer]: EntByID}

function EntsByLayer(): EntsByLayer {
  return Object.fromEntries(
    layerDrawOrder.map(layer => [layer, {}])
  ) as EntsByLayer
}

export class Zoo {
  #entsByLayer: Readonly<EntsByLayer> = EntsByLayer()

  clear(): void {
    this.#entsByLayer = EntsByLayer()
  }

  draw(game: Game): void {
    for (const layer of layerDrawOrder) {
      game.c2d.save()
      if (layer !== 'Cursor' && layer !== 'Level' && layer !== 'UI')
        game.c2d.translate(-game.cam.x, -game.cam.y)

      for (const ent of Object.values(this.#entsByLayer[layer])) {
        switch (ent.type) {
          case 'MineLevel':
            mineLevelEntDraw(ent, game)
            break
          case 'Cursor':
            cursorEntDraw(ent, game)
            break
          case 'Facet':
            facetEntDraw(ent, game)
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

  /** only an ent's layer is replaced. */
  replace(...ents: readonly Readonly<Ent>[]): void {
    for (const ent of ents) this.#entsByLayer[ent.layer][ent.eid] = ent
  }

  update(game: Game): void {
    // update first to align hit checks to input edges.
    cursorEntUpdate(game.cursor, game)
    for (const ent of this.ents()) {
      switch (ent.type) {
        case 'MineLevel':
          mineLevelEntUpdate(ent, game)
          break
        case 'Cursor':
          break
        case 'Facet':
          facetEntUpdate(ent, game)
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

  *ents(): Generator<Ent> {
    for (const layer of layerDrawOrder)
      for (const ent of Object.values(this.#entsByLayer[layer])) yield ent
  }
}
