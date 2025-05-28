type Color = number[]
type HexColor = {
  color: string
  r: number
  g: number
  b: number
}

const getResultColors = (r: Color, g: Color, b: Color) => {
  const [rr, rg, rb] = r
  const [gg, gr, gb] = g
  const [bb, br, bg] = b

  const rHex = toHex([rr, rg, rb], 0)
  const gHex = toHex([gr, gg, gb], 1)
  const bHex = toHex([br, bg, bb], 2)

  const getHexPercent = (hex: number) => +(hex / 255).toFixed(3) * 100

  const pq = [
    {
      color: 'red',
      val: getHexPercent(rr),
      hex: rHex,
    },
    {
      color: 'green',
      val: getHexPercent(gg),
      hex: gHex,
    },
    {
      color: 'blue',
      val: getHexPercent(bb),
      hex: bHex,
    },
  ]

  pq.sort((a, b) => b.val - a.val)

  const [high, mid, low] = pq

  const res: HexColor[] = [
    {
      color: 'black',
      r: ~~((rr + gr + br) / 3),
      g: ~~((rg + gg + bg) / 3),
      b: ~~((rb + gb + bb) / 3),
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

export default getResultColors

function toHex(colorData: Color, mainIdx: number) {
  const mainColorHex = colorData[mainIdx]
  return colorData.map((color, idx) =>
    idx === mainIdx ? color : (mainColorHex * color) / 100
  )
}
