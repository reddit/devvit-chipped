export type MineralCat = {[ima: string]: Mineral}
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

export function parseMineralCat(csv: string): MineralCat {
  const cat: MineralCat = {}
  for (const row of csv.trim().split('\n')) {
    const [ima, name, q, crystalSystems, formula, localities, streaks] =
      row.split('%') as [string, string, Q, string, string, string, string]
    cat[ima] = {
      crystalSystems: crystalSystems ? crystalSystems.split('|') : [],
      formula,
      ima,
      localities: localities ? localities.split('|') : [],
      name,
      q,
      streaks: streaks ? streaks.split('|') : []
    }
  }
  return cat
}
