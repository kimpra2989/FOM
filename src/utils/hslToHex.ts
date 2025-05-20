export default function hslToHex(h: number, s: number, l: number) {
  // s, l은 0~100 사이로 입력받고, 내부적으로 0~1로 변환
  h %= 360
  if (h < 0) h += 360
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s // chroma
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0,
    g = 0,
    b = 0

  if (0 <= h && h < 60) [r, g, b] = [c, x, 0]
  else if (60 <= h && h < 120) [r, g, b] = [x, c, 0]
  else if (120 <= h && h < 180) [r, g, b] = [0, c, x]
  else if (180 <= h && h < 240) [r, g, b] = [0, x, c]
  else if (240 <= h && h < 300) [r, g, b] = [x, 0, c]
  else if (300 <= h && h < 360) [r, g, b] = [c, 0, x]

  // RGB 값을 0~255로 변환
  const r255 = Math.round((r + m) * 255)
  const g255 = Math.round((g + m) * 255)
  const b255 = Math.round((b + m) * 255)

  return [r255, g255, b255]
}
