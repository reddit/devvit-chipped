import {readFileSync} from 'node:fs'
import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {expect, test} from 'vitest'
import {parseMineralCat} from './mineral-cat.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

test('mineral cat is parsable', () => {
  const cat = parseMineralCat(
    readFileSync(`${__dirname}/mineral-cat.csv`, 'utf8')
  )
  expect(cat.Py).toMatchInlineSnapshot(`
    {
      "crystalSystems": [
        "cubic",
      ],
      "formula": "FeS₂",
      "ima": "Py",
      "localities": [],
      "name": "pyrite",
      "q": "Q50769",
      "streaks": [
        "black",
      ],
    }
  `)
  expect(cat.Ttmel).toMatchInlineSnapshot(`
    {
      "crystalSystems": [],
      "formula": "Ba₄(Ti,Fe³⁺,Fe²⁺,Mg)₄(B₂Si₈O₂₇)O₂Clx",
      "ima": "Ttmel",
      "localities": [
        "Baumann prospect, Dumtah",
        "Esquire No. 7 claim",
        "Esquire no. 1 claim",
        "Gun claim",
        "Madrelena mine, Tres Pozos",
        "Santa Cruz",
        "Trumbull peak",
      ],
      "name": "titantaramellite",
      "q": "Q3991836",
      "streaks": [],
    }
  `)
})
