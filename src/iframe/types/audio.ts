import type {Assets} from './assets.ts'

export type Audio = AudioBufferByName & {ctx: AudioContext}
export type AudioBufferByName = {
  hammerHit: AudioBuffer[]
  hammerShattered: AudioBuffer[]
  hammerUnbreakable: AudioBuffer[]
}

export async function Audio(assets: Readonly<Assets>): Promise<Audio> {
  const ctx = new AudioContext()
  const [
    hammerHit0,
    hammerHit1,
    hammerHit2,
    hammerHit3,
    hammerHit4,
    hammerShattered0,
    hammerUnbreakable0
  ] = await Promise.all([
    ctx.decodeAudioData(assets.audio.hammerHit0),
    ctx.decodeAudioData(assets.audio.hammerHit1),
    ctx.decodeAudioData(assets.audio.hammerHit2),
    ctx.decodeAudioData(assets.audio.hammerHit3),
    ctx.decodeAudioData(assets.audio.hammerHit4),
    ctx.decodeAudioData(assets.audio.hammerShattered0),
    ctx.decodeAudioData(assets.audio.hammerUnbreakable0)
  ])
  return {
    ctx,
    hammerHit: [hammerHit0, hammerHit1, hammerHit2, hammerHit3, hammerHit4],
    hammerShattered: [hammerShattered0],
    hammerUnbreakable: [hammerUnbreakable0]
  }
}

export function audioPlay(
  ctx: AudioContext,
  buf: AudioBuffer,
  drop: boolean = true
): void {
  if (drop && ctx.state !== 'running') return // prevent queuing sounds.

  const src = ctx.createBufferSource()
  src.buffer = buf
  src.connect(ctx.destination)
  src.start()
}
