export type MinCat = {[ima: string]: Mineral}
export type Mineral = {
  formula: string
  crystalSystems: string[]
  ima: string
  localities: string[]
  name: string
  q: Q
  streaks: string[]
}

export type Q = `Q{bigint}`
