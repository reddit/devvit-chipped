import {Specimen} from '../../shared/save.js'
import {
  minCanvasWH,
  paletteBlack,
  paletteBlack22,
  thickStroke
} from '../../shared/theme.js'
import {
  type Facet,
  facetHammer,
  facetHitable,
  facetKaput,
  kaputState
} from '../../shared/types/facet.js'
import type {IMA} from '../../shared/types/ima.js'
import type {Seed} from '../../shared/types/random.js'
import {postMessage} from '../mail.js'
import {audioPlay} from '../types/audio.js'
import {camScale} from '../types/cam.js'
import type {Game, InitGame, LoadedGame} from '../types/game.js'
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
      c2d.fillStyle = draw.bg //game.seed.color
      break
    case 'Cracked':
      c2d.fillStyle = facet.specimen
        ? paletteBlack
        : draw.facets[facet.cell.site.voronoiId % draw.facets.length]!
      break
    case 'Chipped':
      c2d.fillStyle = '#0000'
      break
    case 'Shattered':
      c2d.fillStyle = paletteBlack22
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

    c2d.lineWidth = thickStroke
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

export function facetEntUpdate(ent: FacetEnt, game: Game): void {
  const {ctrl, rnd, sound} = game

  const scale = camScale(minCanvasWH, 1, 0, false)
  const cur = cursorEntHitbox(game, 'Level')

  const hits =
    !ctrl.handled &&
    ctrl.isOnStart('A') &&
    ent.facet.cell.pointIntersection(cur.x / scale, cur.y / scale) > 0
  if (!hits) return
  const priorState = ent.facet.state
  if (!facetKaput(ent.facet) && rnd.num > 0.6) facetHammer(ent.facet)
  let fx
  switch (ent.facet.state) {
    case undefined:
    case 'Invisible':
      return
    case 'Solid':
      if (facetHitable(ent.facet))
        fx = sound.hit[Math.trunc(rnd.num * sound.hit.length)]!
      else fx = sound.miss[Math.trunc(rnd.num * sound.miss.length)]!
      break
    case 'Cracked':
      fx = sound.hit[Math.trunc(rnd.num * sound.hit.length)]!
      break
    case 'Chipped':
      if (priorState !== ent.facet.state) facetGet(ent.facet, game, game.seed)
      break
    case 'Shattered':
      if (priorState !== ent.facet.state)
        fx = sound.break[Math.trunc(rnd.num * sound.break.length)]!
      break
    default:
      ent.facet.state satisfies never
      return
  }
  if (fx) audioPlay(game.audio, fx)
}

export function facetGet(
  facet: Facet,
  game: InitGame,
  seed: {ima: IMA; seed: Seed}
): void {
  const {audio, rnd, sound} = game
  let fx = sound.hit[Math.trunc(rnd.num * sound.hit.length)]!
  if (facet.specimen) {
    navigator.vibrate?.(10)
    fx = sound.collect[Math.trunc(rnd.num * sound.collect.length)]!
    const collect = facet.chips > (game.p1.codex[seed.ima]?.chips ?? 0)
    if (collect) {
      game.p1.codex[seed.ima] = Specimen(facet, seed, game.t3)
      game.p1.minerals = Object.values(game.p1.codex).reduce(
        (sum, specimen) => sum + specimen.chips,
        0
      )
    } else {
      game.chips += facet.chips
      game.p1.chips += facet.chips
    }

    game.codex.found = Object.keys(game.p1.codex)
      .sort((lhs, rhs) => lhs.localeCompare(rhs))
      .indexOf(seed.ima)
    game.codex.foundTriggered = true
  } else {
    game.chips += facet.chips
    game.p1.chips += facet.chips
  }
  postMessage({type: 'Save', p1: game.p1})
  audioPlay(audio, fx)
}
