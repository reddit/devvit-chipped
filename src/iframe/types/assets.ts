import {fontFamily} from '../../shared/theme.ts'

export type Assets = {
  audio: {
    [name in
      | 'hammerHit0'
      | 'hammerHit1'
      | 'hammerHit2'
      | 'hammerHit3'
      | 'hammerHit4'
      | 'hammerShattered0'
      | 'hammerUnbreakable0']: ArrayBuffer
  }
  font: FontFace
  img: {[name in 'cursor']: HTMLImageElement}
}

export async function Assets(): Promise<Assets> {
  const [
    hammerHit0,
    hammerHit1,
    hammerHit2,
    hammerHit3,
    hammerHit4,
    hammerShattered0,
    hammerUnbreakable0,
    cursor,
    font
  ] = await Promise.all([
    loadAudio('assets/audio/hammer-hit-0.ogg'),
    loadAudio('assets/audio/hammer-hit-1.ogg'),
    loadAudio('assets/audio/hammer-hit-2.ogg'),
    loadAudio('assets/audio/hammer-hit-3.ogg'),
    loadAudio('assets/audio/hammer-hit-4.ogg'),
    loadAudio('assets/audio/hammer-shattered-0.ogg'),
    loadAudio('assets/audio/hammer-unbreakable-0.ogg'),
    loadImage('assets/images/cursor.webp'),
    new FontFace(fontFamily, 'url(assets/patrick-hand-regular.ttf)').load()
  ])

  return {
    audio: {
      hammerHit0,
      hammerHit1,
      hammerHit2,
      hammerHit3,
      hammerHit4,
      hammerShattered0,
      hammerUnbreakable0
    },
    img: {cursor},
    font
  }
}

async function loadAudio(url: string): Promise<ArrayBuffer> {
  const rsp = await fetch(url)
  if (!rsp.ok) throw Error(`HTTP error ${rsp.status}: ${rsp.statusText}`)
  return await rsp.arrayBuffer()
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(img)
    img.src = src
  })
}
