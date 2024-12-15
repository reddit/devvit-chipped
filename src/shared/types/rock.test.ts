import {expect, test} from 'vitest'
import type {Cell, Halfedge} from 'voronoi'
import type {XY} from './2d.js'
import {cellArea} from './rock.js'

test('cellArea()', () => {
  const Halfedge = (xy: Readonly<XY>): Halfedge =>
    ({
      getEndpoint: () => xy,
      getStartpoint: () => xy
    }) as Halfedge
  const Cell = (...halfedges: XY[]) =>
    ({halfedges: halfedges.map(Halfedge)}) as unknown as Cell
  expect(cellArea(Cell({x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}))).toBe(0)
  expect(cellArea(Cell({x: 0, y: 0}, {x: 4, y: 0}, {x: 2, y: 3}))).toBe(6)
  expect(cellArea(Cell({x: 0, y: 0}, {x: 4, y: 0}, {x: 2, y: 3}))).toBe(6)
  expect(
    cellArea(Cell({x: 0, y: 0}, {x: 4, y: 0}, {x: 4, y: 3}, {x: 0, y: 3}))
  ).toBe(12)
  expect(
    cellArea(
      Cell(
        {x: 0, y: 0},
        {x: 4, y: 0},
        {x: 5, y: 3},
        {x: 2, y: 5},
        {x: -1, y: 3}
      )
    )
  ).toBe(21)
})
