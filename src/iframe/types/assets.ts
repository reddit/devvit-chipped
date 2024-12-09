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
      | 'chippys'
      | 'codexButton'
      | 'codexMinButton'
      | 'helpButton'
      | 'mineral'
      | 'nextButton'
      | 'newButton'
      | 'piggy'
      | 'prevButton'
      | 'rockButton'
      | 'scoreButton'
      | 'shopButton']: HTMLImageElement
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
    chippys,
    codexButton,
    codexMinButton,
    helpButton,
    mineral,
    nextButton,
    newButton,
    piggy,
    prevButton,
    rockButton,
    scoreButton,
    shopButton,
    font
  ] = await Promise.all([
    loadAudio('assets/audio/break-0.mp3'),
    loadAudio('assets/audio/break-1.mp3'),
    loadAudio('assets/audio/break-2.mp3'),
    loadAudio('assets/audio/break-3.mp3'),
    loadAudio('assets/audio/break-4.mp3'),
    loadAudio('assets/audio/break-5.mp3'),
    loadAudio('assets/audio/collect-0.mp3'),
    loadAudio('assets/audio/collect-1.mp3'),
    loadAudio('assets/audio/collect-2.mp3'),
    loadAudio('assets/audio/collect-3.mp3'),
    loadAudio('assets/audio/collect-4.mp3'),
    loadAudio('assets/audio/collect-5.mp3'),
    loadAudio('assets/audio/hit-0.mp3'),
    loadAudio('assets/audio/hit-1.mp3'),
    loadAudio('assets/audio/hit-2.mp3'),
    loadAudio('assets/audio/hit-3.mp3'),
    loadAudio('assets/audio/hit-4.mp3'),
    loadAudio('assets/audio/hit-5.mp3'),
    loadAudio('assets/audio/hit-6.mp3'),
    loadAudio('assets/audio/miss-0.mp3'),
    loadAudio('assets/audio/miss-1.mp3'),
    loadAudio('assets/audio/miss-2.mp3'),
    loadAudio('assets/audio/miss-3.mp3'),
    loadAudio('assets/audio/miss-4.mp3'),
    loadImage('assets/images/chippys.webp'),
    loadImage('assets/images/codex-button.webp'),
    loadImage('assets/images/codex-min-button.webp'),
    loadImage('assets/images/help-button.webp'),
    loadImage('assets/images/mineral.webp'),
    loadImage('assets/images/next-button.webp'),
    loadImage('assets/images/new-button.webp'),
    loadImage('assets/images/piggy.webp'),
    loadImage('assets/images/prev-button.webp'),
    loadImage('assets/images/rock-button.webp'),
    loadImage('assets/images/score-button.webp'),
    loadImage('assets/images/shop-button.webp'),
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
      chippys,
      codexButton,
      codexMinButton,
      helpButton,
      mineral,
      nextButton,
      newButton,
      piggy,
      prevButton,
      rockButton,
      scoreButton,
      shopButton
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
