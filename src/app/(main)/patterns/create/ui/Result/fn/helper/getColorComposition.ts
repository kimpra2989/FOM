type Color = number[]
type HexColor = {
  color: string
  r: number
  g: number
  b: number
}

function getColorComposition(r: number[], g: number[], b: number[]) {
  const [rMain, r1, r2] = r
  const [gMain, g1, g2] = g
  const [bMain, b1, b2] = b

  const rHex = toHex(r, 0)
  const gHex = toHex(g, 1)
  const bHex = toHex(b, 2)

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
      r: ~~((rMain + g1 + b1) / 3),
      g: ~~((r1 + gMain + b2) / 3),
      b: ~~((r2 + g2 + bMain) / 3),
    },
  ]

  if (high.val - mid.val >= 14 && mid.val - low.val < 14) {
    const [r, g, b] = high.hex
    res.push({ color: high.color, r, g, b })
  } else if (mid.val - low.val >= 14 && high.val - mid.val < 14) {
    const [hr, hg, hb] = high.hex
    const [mr, mg, mb] = mid.hex

    res.push(
      { color: high.color, r: hr, g: hg, b: hb },
      { color: mid.color, r: mr, g: mg, b: mb }
    )
  } else {
    const [hr, hg, hb] = high.hex
    const [mr, mg, mb] = mid.hex
    const [lr, lg, lb] = low.hex

    res.push(
      { color: high.color, r: hr, g: hg, b: hb },
      { color: mid.color, r: mr, g: mg, b: mb },
      { color: low.color, r: lr, g: lg, b: lb }
    )
  }

  return res
}

export default getColorComposition

function toHex(colorData: Color, mainIdx: number) {
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

  return result
}
