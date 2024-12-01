import {Specimen} from '../../shared/save.js'
import {
  minCanvasWH,
  paletteBlack,
  paletteBlack2,
  paletteBlack3,
  paletteWhite
} from '../../shared/theme.js'
import {
  type Facet,
  facetHammer,
  facetHitable,
  facetKaput,
  kaputState
} from '../../shared/types/facet.js'
import {postMessage} from '../mail.js'
import {audioPlay} from '../types/audio.js'
import {camScale} from '../types/cam.js'
import type {Game, LoadedGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import {cursorEntHitbox} from './cursor-ent.js'
import type {EID} from './eid.js'

export type FacetEnt = {
  facet: Facet
  layer: Layer
  readonly type: 'Facet'
  readonly eid: EID
}

export function FacetEnt(game: LoadedGame, facet: Facet): FacetEnt {
  return {eid: game.eid.new(), layer: 'Default', type: 'Facet', facet}
}

export function facetEntDraw(
  ent: Readonly<FacetEnt>,
  game: Readonly<Game>
): void {
  const {c2d, draw} = game
  const {facet} = ent
  if (facet.state === 'Invisible') return

  const scale = camScale(minCanvasWH, 1, 0, false)

  c2d.beginPath()
  const halfedges = facet.cell.halfedges
  let v = halfedges[0]!.getStartpoint()
  c2d.moveTo(scale * v.x, scale * v.y)
  c2d.lineWidth = 3
  for (const half of halfedges) {
    v = half.getEndpoint()
    c2d.lineTo(scale * v.x, scale * v.y)
  }
  c2d.strokeStyle = paletteBlack
  switch (facet.state) {
    case 'Solid':
      c2d.fillStyle = paletteWhite //game.seed.color
      break
    case 'Cracked':
      c2d.fillStyle = facet.specimen
        ? paletteBlack
        : draw.facets[facet.cell.site.voronoiId % draw.facets.length]!
      break
    case 'Chipped':
      c2d.fillStyle = paletteBlack2
      break
    case 'Shattered':
      c2d.fillStyle = paletteBlack3
      break
    default:
      facet.state satisfies never
  }
  c2d.fill()
  if (facet.state === 'Cracked') c2d.stroke()

  if (facet.state === 'Solid' || kaputState[facet.state]) {
    c2d.beginPath()
    let v = halfedges[0]!.getStartpoint()
    c2d.moveTo(scale * v.x, scale * v.y)

    c2d.lineWidth = 2
    c2d.strokeStyle = paletteBlack
    for (const half of halfedges) {
      v = half.getEndpoint()
      if (
        game.facets[half.edge.lSite.voronoiId]!.state === 'Invisible' ||
        half.edge.rSite == null ||
        game.facets[half.edge.rSite.voronoiId]!.state === 'Invisible'
      )
        c2d.lineTo(scale * v.x, scale * v.y)
      else c2d.moveTo(scale * v.x, scale * v.y)
    }
    c2d.stroke()
  }
}

export function facetEntUpdate(facet: FacetEnt, game: Game): void {
  const {ctrl, rnd, sound} = game

  const scale = camScale(minCanvasWH, 1, 0, false)
  const cur = cursorEntHitbox(game)

  const hits =
    !ctrl.handled &&
    ctrl.isOnStart('A') &&
    facet.facet.cell.pointIntersection(cur.x / scale, cur.y / scale) > 0
  if (!hits) return
  const priorState = facet.facet.state
  if (!facetKaput(facet.facet) && rnd.num > 0.6) facetHammer(facet.facet)
  let fx
  switch (facet.facet.state) {
    case undefined:
    case 'Invisible':
      return
    case 'Solid':
      if (facetHitable(facet.facet))
        fx = sound.hammerHit[Math.trunc(rnd.num * sound.hammerHit.length)]!
      else
        fx =
          sound.hammerUnbreakable[
            Math.trunc(rnd.num * sound.hammerUnbreakable.length)
          ]!
      break
    case 'Cracked':
      fx = sound.hammerHit[Math.trunc(rnd.num * sound.hammerHit.length)]!
      break
    case 'Chipped':
      if (priorState !== facet.facet.state) {
        fx = sound.hammerHit[Math.trunc(rnd.num * sound.hammerHit.length)]!
        if (facet.facet.specimen) {
          const collect =
            facet.facet.chips > (game.p1.codex[game.seed.ima]?.chips ?? 0)
          if (collect) {
            game.p1.minerals +=
              facet.facet.chips - (game.p1.codex[game.seed.ima]?.chips ?? 0)
          } else {
            game.chips += facet.facet.chips
            game.p1.chips += facet.facet.chips
          }

          if (collect) {
            game.p1.codex[game.seed.ima] = Specimen(
              facet.facet,
              game.seed,
              game.t3
            )
          }
          game.codex.found = Object.keys(game.p1.codex)
            .sort((lhs, rhs) => lhs.localeCompare(rhs))
            .indexOf(game.seed.ima)
          game.codex.foundTriggered = true
        } else {
          game.chips += facet.facet.chips
          game.p1.chips += facet.facet.chips
        }
        postMessage({type: 'Save', p1: game.p1})
      }
      break
    case 'Shattered':
      if (priorState !== facet.facet.state)
        fx =
          sound.hammerShattered[
            Math.trunc(rnd.num * sound.hammerShattered.length)
          ]!
      break
    default:
      facet.facet.state satisfies never
      return
  }
  if (fx) audioPlay(game.audio, fx)
}
