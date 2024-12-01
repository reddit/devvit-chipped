import type {IMA} from '../types/ima.ts'
import minCatJSON from './min-cat.json' with {type: 'json'}

export type MinCat = {[ima: IMA]: Mineral}
export type Mineral = {ima: IMA; localities: string[]; name: string}

export type Q = `Q{bigint}`

export const minCat: Readonly<MinCat> = minCatJSON as MinCat
