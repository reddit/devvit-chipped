export type Layer = 'Cursor' | 'Default' | 'Level' | 'UI'

// to-do: Hidden when changing layers is supported by Zoo.
export const layerDrawOrder: readonly Layer[] = [
  'Level',
  'Default',
  'UI',
  'Cursor'
]
