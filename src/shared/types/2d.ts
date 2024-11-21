/**
 * rectangle. empty is zero width or height. for ents, x and y tend to be
 * fractional and w and h integral pixel dimensions in level space.
 */
export type Box = XY & WH
export type WH = {w: number; h: number}
export type XY = {x: number; y: number}

// to-do: tests.
export function boxHits(
  lhs: Readonly<Box>,
  rhs: Readonly<XY & Partial<WH>>
): boolean {
  const rhsWH = {w: rhs.w ?? 1, h: rhs.h ?? 1} // point? an empty box has no w/h.
  if (!lhs.w || !lhs.h || !rhsWH.w || !rhsWH.h) return false // noncommutative.
  return (
    lhs.x < rhs.x + rhsWH.w &&
    lhs.x + lhs.w > rhs.x &&
    lhs.y < rhs.y + rhsWH.h &&
    lhs.y + lhs.h > rhs.y
  )
}
