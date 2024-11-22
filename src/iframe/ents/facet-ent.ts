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
  facetKaput
} from '../../shared/types/facet.js'
import {postMessage} from '../mail.js'
import {audioPlay} from '../types/audio.js'
import {camScale} from '../types/cam.js'
import type {Game, LoadedGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
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
  for (let iHalfedge = 0; iHalfedge < halfedges.length; iHalfedge++) {
    v = halfedges[iHalfedge]!.getEndpoint()
    c2d.lineTo(scale * v.x, scale * v.y)
  }
  switch (facet.state) {
    case 'Solid':
      c2d.fillStyle = paletteWhite
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
  c2d.lineWidth = 3
  c2d.strokeStyle = paletteBlack
  c2d.fill()
  if (facet.state === 'Cracked') c2d.stroke()
}

export function facetEntUpdate(facet: FacetEnt, game: Game): void {
  const {cam, ctrl, cursor, rnd, sound} = game

  const scale = camScale(minCanvasWH, 1, 0, false)

  const hits =
    ctrl.isOnStart('A') &&
    facet.facet.cell.pointIntersection(
      (cam.x + cursor.x) / scale,
      (cam.y + cursor.y) / scale
    ) > 0
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
          // to-do: collect specimen in inven.
          game.p1.minerals += facet.facet.area
        } else game.p1.chips += facet.facet.area
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
