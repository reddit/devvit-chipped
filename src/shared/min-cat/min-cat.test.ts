import {expect, test} from 'vitest'
import type {IMA} from '../types/ima.js'
import {minCat} from './min-cat.js'

test('MinCat is parsable', () => {
  expect(minCat['Py' as IMA]).toMatchInlineSnapshot(`
    {
      "deprecated": false,
      "ima": "Py",
      "localities": [],
      "name": "pyrite",
    }
  `)
  expect(minCat['Ttmel' as IMA]).toMatchInlineSnapshot(`
    {
      "deprecated": false,
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
    }
  `)
  expect(minCat['Nbix-Mn' as IMA]).toMatchInlineSnapshot(`
    {
      "deprecated": true,
      "ima": "Nbix-Mn",
      "localities": [],
      "name": "nioboixiolite-(Mn²⁺)",
    }
  `)
})
