import {minCanvasWH} from '../shared/theme.ts'
import {camScale} from './types/cam.ts'

export function uiScale(max: number = 4): number {
  return Math.min(max, camScale(minCanvasWH, 1, 0, false)) / max
}
