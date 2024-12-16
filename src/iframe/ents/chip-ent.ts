import {Specimen} from '../../shared/save.js'
import {
  minCanvasWH,
  paletteBlack,
  paletteBlack22,
  thickStroke
} from '../../shared/theme.js'
import type {IMA} from '../../shared/types/ima.js'
import type {Seed} from '../../shared/types/random.js'
import {
  type Chip,
  chipHit,
  chipHitable,
  chipIsStatic
} from '../../shared/types/rock.js'
import {postMessage} from '../mail.js'
import {audioPlay} from '../types/audio.js'
import {camScale} from '../types/cam.js'
import type {Game, InitGame, LoadedGame} from '../types/game.js'
import type {Layer} from '../types/layer.js'
import {cursorEntHitbox} from './cursor-ent.js'
import type {EID} from './eid.js'

export type ChipEnt = {
  chip: Chip
  layer: Layer
  readonly type: 'Chip'
  readonly eid: EID
}

export function ChipEnt(game: LoadedGame, chip: Chip): ChipEnt {
  return {chip, eid: game.eid.new(), layer: 'Default', type: 'Chip'}
}

export function chipEntDraw(
  ent: Readonly<ChipEnt>,
  game: Readonly<Game>
): void {
  const {c2d, draw} = game
  const {chip} = ent
  if (chip.state === 'Invisible') return

  const scale = camScale(minCanvasWH, 1, 0, false)

  c2d.beginPath()
  const halfedges = chip.cell.halfedges
  let v = halfedges[0]!.getStartpoint()
  c2d.moveTo(scale * v.x, scale * v.y)
  c2d.lineWidth = 3
  for (const half of halfedges) {
    v = half.getEndpoint()
    c2d.lineTo(scale * v.x, scale * v.y)
  }
  c2d.strokeStyle = paletteBlack
  switch (chip.state) {
    case 'Solid':
      c2d.fillStyle = draw.bg //game.seed.color
      break
    case 'Cracked':
      c2d.fillStyle = chip.specimen
        ? paletteBlack
        : draw.chips[chip.cell.site.voronoiId % draw.chips.length]!
      break
    case 'Chipped':
      c2d.fillStyle = '#0000'
      break
    case 'Shattered':
      c2d.fillStyle = paletteBlack22
      break
    default:
      chip.state satisfies never
  }
  c2d.fill()
  if (chip.state === 'Cracked') c2d.stroke()

  if (chip.state === 'Solid' || chipIsStatic(chip)) {
    c2d.beginPath()
    let v = halfedges[0]!.getStartpoint()
    c2d.moveTo(scale * v.x, scale * v.y)

    c2d.lineWidth = thickStroke
    c2d.strokeStyle = paletteBlack
    for (const half of halfedges) {
      v = half.getEndpoint()
      if (
        game.chips[half.edge.lSite.voronoiId]!.state === 'Invisible' ||
        half.edge.rSite == null ||
        game.chips[half.edge.rSite.voronoiId]!.state === 'Invisible'
      )
        c2d.lineTo(scale * v.x, scale * v.y)
      else c2d.moveTo(scale * v.x, scale * v.y)
    }
    c2d.stroke()
  }
}

export function chipEntUpdate(ent: ChipEnt, game: Game): void {
  const {ctrl, rnd, sound} = game

  const scale = camScale(minCanvasWH, 1, 0, false)
  const cur = cursorEntHitbox(game, 'Level')

  const hits =
    !ctrl.handled &&
    ctrl.isOnStart('A') &&
    ent.chip.cell.pointIntersection(cur.x / scale, cur.y / scale) > 0
  if (!hits) return
  const priorState = ent.chip.state
  if (!chipIsStatic(ent.chip) && rnd.num < 0.4) chipHit(ent.chip)
  let fx
  switch (ent.chip.state) {
    case undefined:
    case 'Invisible':
      return
    case 'Solid':
      if (chipHitable(ent.chip))
        fx = sound.hit[Math.trunc(rnd.num * sound.hit.length)]!
      else fx = sound.miss[Math.trunc(rnd.num * sound.miss.length)]!
      break
    case 'Cracked':
      fx = sound.hit[Math.trunc(rnd.num * sound.hit.length)]!
      break
    case 'Chipped':
      if (priorState !== ent.chip.state) chipGet(ent.chip, game, game.seed)
      postMessage({type: 'Save', p1: game.p1})
      break
    case 'Shattered':
      if (priorState !== ent.chip.state)
        fx = sound.break[Math.trunc(rnd.num * sound.break.length)]!
      break
    default:
      ent.chip.state satisfies never
      return
  }
  if (fx) audioPlay(game.audio, fx)
}

export function chipGet(
  chip: Chip,
  game: InitGame,
  seed: {ima: IMA; seed: Seed}
): void {
  const {audio, rnd, sound} = game
  let fx = sound.hit[Math.trunc(rnd.num * sound.hit.length)]!
  if (chip.specimen) {
    navigator.vibrate?.(10)
    fx = sound.collect[Math.trunc(rnd.num * sound.collect.length)]!
    const collect = chip.area > (game.p1.codex[seed.ima]?.chips ?? 0)
    if (collect) {
      game.p1.codex[seed.ima] = Specimen(chip, seed, game.t3)
      game.p1.minerals = Object.values(game.p1.codex).reduce(
        (sum, specimen) => sum + specimen.chips,
        0
      )
    } else {
      game.area += chip.area
      game.p1.chips += chip.area
    }

    game.codex.found = Object.keys(game.p1.codex)
      .sort((lhs, rhs) => lhs.localeCompare(rhs))
      .indexOf(seed.ima)
    game.codex.foundTriggered = true
  } else {
    game.area += chip.area
    game.p1.chips += chip.area
  }
  audioPlay(audio, fx)
}
