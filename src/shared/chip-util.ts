export function chipsFmt(
  chips: number,
  detail: 'Short' | 'Terse' | 'Long'
): string {
  const khips = chips / 1024
  return `${detail === 'Terse' ? Math.round(khips) : khips.toFixed(detail === 'Short' ? 1 : 3)} ¢`
}
