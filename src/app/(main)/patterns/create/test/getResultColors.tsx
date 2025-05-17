type Color = number[]
type HSLColor = {
  h: number
  s: number
  l: number
}
type HexColor = {
  color: string
  hex: number
}

const getResultColors = (r: Color, g: Color, b: Color) => {
  const [rHex, rS, rL] = r
  const [gHex, gS, gL] = g
  const [bHex, bS, bL] = b

  const getHexPercent = (hex: number) => +(hex / 255).toFixed(2) * 100

  const pq = [
    { hex: getHexPercent(rHex), h: 0, s: rS, l: rL },
    {
      hex: getHexPercent(gHex),
      h: 120,
      s: gS,
      l: gL,
    },
    {
      hex: getHexPercent(bHex),
      h: 240,
      s: bS,
      l: bL,
    },
  ]
  pq.sort((a, b) => b.hex - a.hex)
  // console.log('pq', pq)

  const [high, mid, low] = pq

  const res: (HexColor | HSLColor)[] = [
    { color: 'black', hex: ~~((rHex + gHex + bHex) / 3) },
  ]

  if (mid.hex - low.hex >= 14) {
    if (high.hex - mid.hex >= 14) {
      res.push({ h: high.h, s: high.s, l: high.l })
    } else {
      res.push(
        { h: high.h, s: high.s, l: high.l },
        { h: mid.h, s: mid.s, l: mid.l }
      )
    }
  } else {
    res.push(
      { h: high.h, s: high.s, l: high.l },
      { h: mid.h, s: mid.s, l: mid.l },
      { h: low.h, s: low.s, l: low.l }
    )
  }

  return res
}

export default getResultColors
