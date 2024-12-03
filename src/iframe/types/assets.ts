import {fontFamily} from '../../shared/theme.ts'

export type Assets = {
  audio: {
    [name in
      | 'hit0'
      | 'hit1'
      | 'hit2'
      | 'hit3'
      | 'hit4'
      | 'hit5'
      | 'hit6'
      | 'break0'
      | 'break1'
      | 'break2'
      | 'break3'
      | 'break4'
      | 'break5'
      | 'collect0'
      | 'collect1'
      | 'collect2'
      | 'collect3'
      | 'collect4'
      | 'collect5'
      | 'miss0'
      | 'miss1'
      | 'miss2'
      | 'miss3'
      | 'miss4']: ArrayBuffer
  }
  font: FontFace
  img: {
    [name in
      | 'codexButton'
      | 'nextButton'
      | 'prevButton'
      | 'rockButton'
      | 'rockMinButton'
      | 'scoreButton']: HTMLImageElement
  }
}

export async function Assets(): Promise<Assets> {
  const [
    break0,
    break1,
    break2,
    break3,
    break4,
    break5,
    collect0,
    collect1,
    collect2,
    collect3,
    collect4,
    collect5,
    hit0,
    hit1,
    hit2,
    hit3,
    hit4,
    hit5,
    hit6,
    miss0,
    miss1,
    miss2,
    miss3,
    miss4,
    codexButton,
    nextButton,
    prevButton,
    rockButton,
    rockMinButton,
    scoreButton,
    font
  ] = await Promise.all([
    loadAudio('assets/audio/break-0.ogg'),
    loadAudio('assets/audio/break-1.ogg'),
    loadAudio('assets/audio/break-2.ogg'),
    loadAudio('assets/audio/break-3.ogg'),
    loadAudio('assets/audio/break-4.ogg'),
    loadAudio('assets/audio/break-5.ogg'),
    loadAudio('assets/audio/collect-0.ogg'),
    loadAudio('assets/audio/collect-1.ogg'),
    loadAudio('assets/audio/collect-2.ogg'),
    loadAudio('assets/audio/collect-3.ogg'),
    loadAudio('assets/audio/collect-4.ogg'),
    loadAudio('assets/audio/collect-5.ogg'),
    loadAudio('assets/audio/hit-0.ogg'),
    loadAudio('assets/audio/hit-1.ogg'),
    loadAudio('assets/audio/hit-2.ogg'),
    loadAudio('assets/audio/hit-3.ogg'),
    loadAudio('assets/audio/hit-4.ogg'),
    loadAudio('assets/audio/hit-5.ogg'),
    loadAudio('assets/audio/hit-6.ogg'),
    loadAudio('assets/audio/miss-0.ogg'),
    loadAudio('assets/audio/miss-1.ogg'),
    loadAudio('assets/audio/miss-2.ogg'),
    loadAudio('assets/audio/miss-3.ogg'),
    loadAudio('assets/audio/miss-4.ogg'),
    loadImage('assets/images/codex-button.webp'),
    loadImage('assets/images/next-button.webp'),
    loadImage('assets/images/prev-button.webp'),
    loadImage('assets/images/rock-button.webp'),
    loadImage('assets/images/rock-min-button.webp'),
    loadImage('assets/images/score-button.webp'),
    new FontFace(fontFamily, 'url(assets/patrick-hand-regular.ttf)').load()
  ])

  return {
    audio: {
      break0,
      break1,
      break2,
      break3,
      break4,
      break5,
      collect0,
      collect1,
      collect2,
      collect3,
      collect4,
      collect5,
      hit0,
      hit1,
      hit2,
      hit3,
      hit4,
      hit5,
      hit6,
      miss0,
      miss1,
      miss2,
      miss3,
      miss4
    },
    img: {
      codexButton,
      nextButton,
      prevButton,
      rockButton,
      rockMinButton,
      scoreButton
    },
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
