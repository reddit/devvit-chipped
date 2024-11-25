export type MinCat = {[ima: string]: Mineral}
export type Mineral = {
  description: string
  ima: string
  localities: string[]
  name: string
  q: Q
}

export type Q = `Q{bigint}`
