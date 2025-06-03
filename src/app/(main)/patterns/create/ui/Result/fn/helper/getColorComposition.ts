type Color = number[]
type HexColor = {
  color: string
  hex: string
}

function getColorComposition(r: number[], g: number[], b: number[]) {
  const rMain = r[0]
  const gMain = g[0]
  const bMain = b[0]

  const rHex = InputtoHex(r, 0)
  const gHex = InputtoHex(g, 1)
  const bHex = InputtoHex(b, 2)

  const getHexPercent = (hex: number) => +(hex / 255).toFixed(3) * 100

  const pq = [
    {
      color: 'red',
      val: getHexPercent(rMain),
      hex: rHex,
    },
    {
      color: 'green',
      val: getHexPercent(gMain),
      hex: gHex,
    },
    {
      color: 'blue',
      val: getHexPercent(bMain),
      hex: bHex,
    },
  ]

  pq.sort((a, b) => b.val - a.val)

  const [high, mid, low] = pq

  const res: HexColor[] = [
    {
      color: 'black',
      hex: averageHexColors([rHex, gHex, bHex]),
    },
  ]

  if (high.val - mid.val >= 14 && mid.val - low.val < 14) {
    res.push({ color: high.color, hex: high.hex })
  } else if (mid.val - low.val >= 14 && high.val - mid.val < 14) {
    res.push(
      { color: high.color, hex: high.hex },
      { color: mid.color, hex: mid.hex }
    )
  } else {
    res.push(
      { color: high.color, hex: high.hex },
      { color: mid.color, hex: mid.hex },
      { color: low.color, hex: low.hex }
    )
  }

  return res
}

export default getColorComposition

function InputtoHex(colorData: Color, mainIdx: number) {
  const result = [0, 0, 0]
  const maxHex = colorData[0]
  result[mainIdx] = maxHex
  const subValues = colorData.slice(1)

  // 더 해질 값 계산
  const toAdd = [0, 0, 0] // [r, g, b]
  subValues.forEach((subValue) => {
    if (subValue < 255) {
      toAdd[0] += subValue
    } else if (subValue < 510) {
      toAdd[1] += subValue - 255
    } else {
      toAdd[2] += subValue - 255 * 2
    }
  })

  result[mainIdx] = Math.min(255, maxHex + toAdd[mainIdx])
  toAdd.forEach((v, i) => {
    if (i === mainIdx) return

    result[i] = ~~((Math.min(255, toAdd[i]) / 255) * maxHex)
  })

  return result.reduce((acc, colorHex) => acc + toHex(colorHex), '#')
}

const toHex = (n: number) => n.toString(16).padStart(2, '0')

function averageHexColors(hexCodes: string[]): string {
  const rgbValues = hexCodes.map((hex) => {
    const cleaned = hex.replace('#', '')
    const r = parseInt(cleaned.substring(0, 2), 16)
    const g = parseInt(cleaned.substring(2, 4), 16)
    const b = parseInt(cleaned.substring(4, 6), 16)
    return [r, g, b]
  })

  const total = rgbValues.reduce(
    (acc, [r, g, b]) => {
      acc[0] += r
      acc[1] += g
      acc[2] += b
      return acc
    },
    [0, 0, 0]
  )

  const len = rgbValues.length
  const avg = total.map((v) => Math.round(v / len))

  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(avg[0])}${toHex(avg[1])}${toHex(avg[2])}`
}
