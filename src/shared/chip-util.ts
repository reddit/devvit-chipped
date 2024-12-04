export function chipsFmt(chips: number, detail: 'Short' | 'Long'): string {
  return `${(chips / 1024).toFixed(detail === 'Short' ? 1 : 3)} ¢`
}
