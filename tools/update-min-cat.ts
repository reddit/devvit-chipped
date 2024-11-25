#!/usr/bin/env -S node --experimental-strip-types --no-warnings=ExperimentalWarning

import {writeFileSync} from 'node:fs'
import pkg from '../package.json' with {type: 'json'}
import type {MinCat, Q} from '../src/shared/min-cat/min-cat.js'

type MineralWikidata = {results: {bindings: QueryBinding[]}}
type QueryBinding = {
  crystalSystemLabel?: {value: string}
  description?: {value: string}
  formula?: {value: string}
  imaStatusLabel: {value: string}
  imaSymbol: {value: string}
  localityLabel?: {value: string}
  mineral: {value: string}
  mineralLabel: {value: string}
  streakColorLabel?: {value: string}
}

// query prevalent interesting data. https://query.wikidata.org. spot check with
// https://www.cambridge.org/core/journals/mineralogical-magazine/article/imacnmnc-approved-mineral-symbols/62311F45ED37831D78603C6E6B25EE0A.
// api.mindat.org is a nonprofit but doesn't have a commercial license.
const query: string = `
  select
    ?mineral
    ?mineralLabel
    ?imaSymbol
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
             wdt:P10113 ?imaSymbol;
             wdt:P579   ?imaStatus;

    optional {?mineral schema:description ?description    .}
    optional {?mineral wdt:P534           ?streakColor    .}
    optional {?mineral wdt:P2695          ?locality       .}
    optional {?mineral wdt:P274           ?formula        .}
    optional {?mineral wdt:P556           ?crystalSystem  .}
    optional {?mineral wdt:P527           ?hasParts       .}

    filter(lang(?description) = "en")

    service wikibase:label {bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en".}
  }
  order by
    ?imaSymbol
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

function parseMineralWikidata(rsp: Readonly<MineralWikidata>): MinCat {
  const cat: MinCat = {}
  for (const binding of rsp.results.bindings) {
    const ima = binding.imaSymbol.value
    cat[ima] = {
      description: binding.description?.value ?? '',
      ima,
      localities: unique(cat[ima]?.localities, binding.localityLabel?.value),
      name: binding.mineralLabel.value,
      q: Q(
        binding.mineral.value.slice('http://www.wikidata.org/entity/'.length)
      )
    }
  }
  return cat
}

function unique<T>(lhs: T[] | undefined, rhs: T | undefined): T[] {
  return [...new Set([...(lhs ?? []), ...(rhs ? [rhs] : [])])]
}

// hack: this should be in min-cat.ts next to the type but blocked by Node / tsc
// import incompatibility.
// biome-ignore lint/suspicious/noRedeclare:
function Q(q: string): Q {
  if (!q.startsWith('Q')) throw Error(`${q} must start with Q`)
  return q as Q
}

writeFileSync(
  'src/shared/min-cat/min-cat.json', // CSV saves ~60 KiB gzipped.
  JSON.stringify(
    parseMineralWikidata(await fetchMineralWikidata()),
    undefined,
    2
  )
)
