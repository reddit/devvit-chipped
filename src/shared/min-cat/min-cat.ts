import type {IMA} from '../types/ima.ts'
import minCatJSON from './min-cat.json' with {type: 'json'}

export type MinCat = {[ima: IMA]: Mineral}
export type Mineral = {
  deprecated?: true
  ima: IMA
  localities: string[]
  name: string
}

export type Q = `Q{bigint}`

/** contains deprecated minerals. */
export const minCat: Readonly<MinCat> = minCatJSON as MinCat

// to-do: rename.
// to-do: think about a better to handle deterministic post generation and
//        new / deprecated minerals.
/** warning: does not contain deprecated minerals. */
export const minCatSet: readonly Readonly<Mineral>[] = Object.values(
  minCat
).filter(min => !min.deprecated)
