import {chipsFmt} from '../../../shared/chip-util.ts'
import {
  fontMSize,
  fontXLSize,
  minCanvasWH,
  paletteBlack,
  spacePx
} from '../../../shared/theme.ts'
import type {Box} from '../../../shared/types/2d.ts'
import {audioPlay} from '../../types/audio.ts'
import {drawText} from '../../types/draw.ts'
import type {Game, InitGame} from '../../types/game.ts'
import type {Layer} from '../../types/layer.ts'
import {uiScale} from '../../ui.ts'
import {ButtonEnt, buttonSize} from '../button-ent.ts'
import type {EID} from '../eid.ts'
import {facetGet} from '../facet-ent.ts'

export type ShopLevelEnt = {
  readonly eid: EID
  ents: {0: ButtonEnt; 1: ButtonEnt; 2: ButtonEnt}
  grid: Box
  layer: Layer
  readonly type: 'ShopLevel'
}

export function ShopLevelEnt(game: Game): ShopLevelEnt {
  const {cursor, eid, shop, toolbelt, zoo} = game
  zoo.clear()
  zoo.replace(cursor, toolbelt)

  const btns = shop.rocks.map((rock, i) => {
    const btn = ButtonEnt(
      eid,
      '',
      chipsFmt(Math.ceil((0.3 * rock.crap.chips) / 1024) * 1024, 'Terse'),
      'Center'
    )
    btn.disabled = rock.bought
    return [i, btn]
  })

  const lvl: ShopLevelEnt = {
    eid: eid.new(),
    ents: Object.fromEntries(btns),
    grid: {x: 0, y: 0, w: 0, h: 0},
    layer: 'Level',
    type: 'ShopLevel'
  }
  updateGrid(lvl, game)
  return lvl
}

export function shopLevelEntDraw(
  lvl: ShopLevelEnt,
  game: Readonly<Game>
): void {
  const {c2d, cam, img, p1, shop} = game

  const scale = uiScale()

  const signX = cam.portrait ? 4 * spacePx : buttonSize() + spacePx * 4
  const signWH = {w: 338 * scale, h: 180 * scale}
  c2d.drawImage(img.chippys, signX, 0, signWH.w, signWH.h)
  drawText(c2d, '"buy a rock!"', {
    x: signX,
    y: signWH.h - spacePx,
    origin: 'TopLeft',
    fill: paletteBlack,
    size: fontMSize * scale
  })

  const piggyWH = {w: 129 * scale, h: 80 * scale}
  c2d.drawImage(
    img.piggy,
    signX + signWH.w + spacePx,
    2 * spacePx,
    piggyWH.w,
    piggyWH.h
  )

  drawText(c2d, chipsFmt(p1.chips, 'Short'), {
    x: signX + signWH.w + spacePx + piggyWH.w + spacePx,
    y: 2 * spacePx,
    origin: 'TopLeft',
    size: fontXLSize * scale,
    fill: paletteBlack
  })

  const rockScale = Math.min(
    1,
    (scale * cam.w) / (3 * Math.min(minCanvasWH.w + spacePx, cam.w / 3))
  )
  const rockWH = {w: rockScale * minCanvasWH.w, h: rockScale * minCanvasWH.h}
  const offset = {
    x: lvl.grid.x + (lvl.grid.w - (3 * rockWH.w + 4 * spacePx)) / 2,
    y: lvl.grid.y + lvl.grid.h / 2 - rockWH.h
  }
  for (let i = 0; i < shop.rocks.length; i++) {
    const rock = shop.rocks[i]!.crap.rock
    c2d.beginPath()
    const x = offset.x + i * rockWH.w + i * 2 * spacePx
    for (const [start, end] of rock) {
      c2d.moveTo(rockScale * start!.x + x, rockScale * start!.y + offset.y)
      c2d.lineTo(rockScale * end!.x + x, rockScale * end!.y + offset.y)
    }
    c2d.closePath()
    c2d.strokeStyle = paletteBlack
    c2d.stroke()

    const btn = lvl.ents[i as 0 | 1 | 2]
    btn.x = x + rockWH.w / 2 - buttonSize() / 2
    btn.y = offset.y + rockWH.h + spacePx
  }
}

export function shopLevelEntUpdate(lvl: ShopLevelEnt, game: Game): void {
  updateGrid(lvl, game)
}

function updateGrid(lvl: ShopLevelEnt, game: InitGame): void {
  const {cam, shop, toolbelt, p1, rnd, sound} = game

  if (cam.portrait) {
    lvl.grid.x = spacePx
    lvl.grid.y = buttonSize() + 4 * spacePx
    lvl.grid.w = cam.w - 2 * spacePx
    lvl.grid.h = cam.h - toolbelt.h - 8 * spacePx - buttonSize()
  } else {
    lvl.grid.x = toolbelt.w + 2 * spacePx
    lvl.grid.y = buttonSize() + 6 * spacePx
    lvl.grid.w = cam.w - toolbelt.w - 3 * spacePx
    lvl.grid.h = cam.h - 8 * spacePx - buttonSize()
  }

  for (const [key, btn] of Object.entries(lvl.ents)) {
    const i = Number.parseInt(key)
    const rock = shop.rocks[i]!
    if (btn.onStart) {
      const cost = Math.ceil((0.3 * rock.crap.chips) / 1024) * 1024
      if (p1.chips >= cost) {
        p1.chips -= cost
        const specimen = rock.crap.facets.find(facet => facet.specimen)
        if (!specimen || rock.dud)
          audioPlay(
            game.audio,
            sound.break[Math.trunc(rnd.num * sound.break.length)]!
          )
        else facetGet(specimen, game, rock.crap.seed)
        rock.bought = true
        btn.disabled = true
      }
      break
    }
  }
}
