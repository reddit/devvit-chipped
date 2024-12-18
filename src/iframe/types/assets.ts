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
    audioCat,
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
    loadAudio('assets/audio.cat'),
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

  const break0 = audioCat.slice(0, 33498)
  const break1 = audioCat.slice(33498, 59682)
  const break2 = audioCat.slice(59682, 81687)
  const break3 = audioCat.slice(81687, 111006)
  const break4 = audioCat.slice(111006, 152864)
  const break5 = audioCat.slice(152864, 181138)
  const collect0 = audioCat.slice(181138, 203143)
  const collect1 = audioCat.slice(203143, 218878)
  const collect2 = audioCat.slice(218878, 254466)
  const collect3 = audioCat.slice(254466, 272291)
  const collect4 = audioCat.slice(272291, 289071)
  const collect5 = audioCat.slice(289071, 321525)
  const hit0 = audioCat.slice(321525, 329946)
  const hit1 = audioCat.slice(329946, 345681)
  const hit2 = audioCat.slice(345681, 369775)
  const hit3 = audioCat.slice(369775, 391780)
  const hit4 = audioCat.slice(391780, 404380)
  const hit5 = audioCat.slice(404380, 418025)
  const hit6 = audioCat.slice(418025, 429581)
  const miss0 = audioCat.slice(429581, 454720)
  const miss1 = audioCat.slice(454720, 486129)
  const miss2 = audioCat.slice(486129, 502909)
  const miss3 = audioCat.slice(502909, 519689)
  const miss4 = audioCat.slice(519689)

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
