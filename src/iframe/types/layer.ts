export type Layer = 'Cursor' | 'Default' | 'Level' | 'UIBg' | 'UIFg'

// to-do: Hidden when changing layers is supported by Zoo.
export const layerDrawOrder: readonly Layer[] = [
  'Level',
  'Default',
  'UIBg',
  'UIFg',
  'Cursor'
]
