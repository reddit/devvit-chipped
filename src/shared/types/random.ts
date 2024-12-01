declare const seed: unique symbol
export type Seed = number & {readonly [seed]: never}

export const randomEndSeed: number = 0x7fff_ffff

/** http://www.firstpr.com.au/dsp/rand31. */
export class Random {
  /** [1, 0x7fff_fffe]. */
  seed: Seed

  constructor(seed: Seed) {
    this.seed = ((seed * 16_807) % randomEndSeed) as Seed // [-0x7fff_fffe, 0x7fff_fffe]

    // Account for out of range numbers.
    if (this.seed <= 0)
      // [-0x7fff_fffe, 0]
      this.seed = (((this.seed + 0x7fff_fffe) % (randomEndSeed - 1)) + // [0, 0x7fff_fffd]
        1) as Seed // [1, 0x7fff_fffe]
  }

  /** @return a fraction in [0, 1). */
  get num(): number {
    this.seed = ((this.seed * 16_807) % randomEndSeed) as Seed
    return (this.seed - 1) / (randomEndSeed - 1)
  }
}
