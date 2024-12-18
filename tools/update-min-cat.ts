#!/usr/bin/env -S node --experimental-strip-types --no-warnings=ExperimentalWarning

import {readFileSync, writeFileSync} from 'node:fs'
import pkg from '../package.json' with {type: 'json'}
import type {MinCat, QID} from '../src/shared/min-cat/min-cat.js'
import type {IMA} from '../src/shared/types/ima.js'

type MineralWikidata = {results: {bindings: QueryBinding[]}}
type QueryBinding = {
  crystalSystemLabel?: {value: string}
  description?: {value: string}
  formula?: {value: string}
  imaStatusLabel: {value: string}
  ima: {value: string}
  localityLabel?: {value: string}
  mineral: {value: string}
  mineralLabel: {value: string}
  streakColorLabel?: {value: string}
}

// query prevalent interesting small data. https://query.wikidata.org. spot
// check with
// https://www.cambridge.org/core/journals/mineralogical-magazine/article/imacnmnc-approved-mineral-symbols/62311F45ED37831D78603C6E6B25EE0A.
// api.mindat.org is a nonprofit but doesn't have a commercial license.
const query: string = `
  select
    ?mineral
    ?mineralLabel
    ?ima
    ?imaStatusLabel
    ?description
    ?streakColorLabel
    ?localityLabel
    ?formula
    ?crystalSystemLabel
    ?hasPartsLabel
  where {
    values ?type      {wd:Q12089225 wd:Q3965281}
    values ?imaStatus {wd:Q13406846 wd:Q13406835 wd:Q13406860}
    ?mineral wdt:P31    ?type     ;
             wdt:P10113 ?ima      ;
             wdt:P579   ?imaStatus;

    optional {?mineral schema:description ?description    .}
    optional {?mineral wdt:P534           ?streakColor    .}
    optional {?mineral wdt:P2695          ?locality       .}
    optional {?mineral wdt:P274           ?formula        .}
    optional {?mineral wdt:P556           ?crystalSystem  .}
    optional {?mineral wdt:P527           ?hasParts       .}

    filter(lang(?description) = "en")

    service wikibase:label {bd:serviceParam wikibase:language "en".}
  }
  order by
    ?ima
    ?crystalSystemLabel
    ?localityLabel
    ?streakColorLabel
  limit 10000
`

async function fetchMineralWikidata(): Promise<MineralWikidata> {
  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}`
  const headers = {
    Accept: 'application/json',
    'User-Agent': `${pkg.name}/${pkg.version} (https://reddit.com/r/chippedgame; stephen.niedzielski@reddit.com)`
  }
  const rsp = await fetch(url, {headers})
  if (!rsp.ok) throw Error(`HTTP error ${rsp.status}: ${rsp.statusText}`)
  return (await rsp.json()) as MineralWikidata
}

// hack: instead of supporting CSV escapes, | for subfield commas and % columns.
function minCatToCSV(cat: Readonly<MinCat>): string {
  let csv = ''
  for (const min of Object.values(cat)) {
    if (min.localities.some(val => /\|/.test(val)))
      throw Error(`${min.q} locality contains |; ${JSON.stringify(min)}`)
    const vals = [
      min.ima,
      min.name,
      min.deprecated ? 'D' : '',
      min.localities.join('|')
    ]
    if (vals.some(val => val.includes('%')))
      throw Error(`${min.q} field contains %; ${JSON.stringify(min)}`)
    csv += `${vals.join('%')}\n`
  }
  return csv
}

function parseMineralWikidata(rsp: Readonly<MineralWikidata>): MinCat {
  const cat: MinCat = {}
  for (const binding of rsp.results.bindings) {
    const ima = binding.ima.value as IMA
    cat[ima] = {
      deprecated: false,
      ima,
      localities: unique(cat[ima]?.localities, binding.localityLabel?.value),
      name: binding.mineralLabel.value,
      q: binding.mineral.value.replace(
        'http://www.wikidata.org/entity/',
        ''
      ) as QID
    }
  }
  return cat
}

function unique<T>(lhs: T[] | undefined, rhs: T | undefined): T[] {
  return [...new Set([...(lhs ?? []), ...(rhs ? [rhs] : [])])]
}

const minCat = parseMineralWikidata(await fetchMineralWikidata())
minCat['Nbix-Mn' as IMA] = {
  deprecated: true,
  ima: 'Nbix-Mn' as IMA,
  localities: [],
  name: 'nioboixiolite-(Mn²⁺)'
}

const template = readFileSync('src/shared/min-cat/min-cat.ts', 'utf8')
const codegen = `
// codegen: csv
export const minCat: Readonly<MinCat> = parseMinCat(\`${minCatToCSV(minCat)}\`)
`.trim()

writeFileSync(
  'src/shared/min-cat/min-cat.ts',
  template.replace('// codegen: csv', codegen)
)
