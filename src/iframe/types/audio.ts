import type {Assets} from './assets.ts'

export type Audio = AudioBufferByName & {ctx: AudioContext}
export type AudioBufferByName = {
  hit: AudioBuffer[]
  break: AudioBuffer[]
  collect: AudioBuffer[]
  miss: AudioBuffer[]
}

export async function Audio(assets: Readonly<Assets>): Promise<Audio> {
  const ctx = new AudioContext()
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
    miss4
  ] = await Promise.all([
    ctx.decodeAudioData(assets.audio.break0),
    ctx.decodeAudioData(assets.audio.break1),
    ctx.decodeAudioData(assets.audio.break2),
    ctx.decodeAudioData(assets.audio.break3),
    ctx.decodeAudioData(assets.audio.break4),
    ctx.decodeAudioData(assets.audio.break5),
    ctx.decodeAudioData(assets.audio.collect0),
    ctx.decodeAudioData(assets.audio.collect1),
    ctx.decodeAudioData(assets.audio.collect2),
    ctx.decodeAudioData(assets.audio.collect3),
    ctx.decodeAudioData(assets.audio.collect4),
    ctx.decodeAudioData(assets.audio.collect5),
    ctx.decodeAudioData(assets.audio.hit0),
    ctx.decodeAudioData(assets.audio.hit1),
    ctx.decodeAudioData(assets.audio.hit2),
    ctx.decodeAudioData(assets.audio.hit3),
    ctx.decodeAudioData(assets.audio.hit4),
    ctx.decodeAudioData(assets.audio.hit5),
    ctx.decodeAudioData(assets.audio.hit6),
    ctx.decodeAudioData(assets.audio.miss0),
    ctx.decodeAudioData(assets.audio.miss1),
    ctx.decodeAudioData(assets.audio.miss2),
    ctx.decodeAudioData(assets.audio.miss3),
    ctx.decodeAudioData(assets.audio.miss4)
  ])
  return {
    ctx,
    break: [break0, break1, break2, break3, break4, break5],
    collect: [collect0, collect1, collect2, collect3, collect4, collect5],
    hit: [hit0, hit1, hit2, hit3, hit4, hit5, hit6],
    miss: [miss0, miss1, miss2, miss3, miss4]
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
