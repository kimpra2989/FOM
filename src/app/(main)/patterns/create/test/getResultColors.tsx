import { hslToHex } from '#/utils'

type Color = number[]
type HexColor = {
  color: string
  r: number
  g: number
  b: number
}

const getResultColors = (r: Color, g: Color, b: Color) => {
  const rHex = hslToHex(...(r as [number, number, number]))
  const gHex = hslToHex(...(g as [number, number, number]))
  const bHex = hslToHex(...(b as [number, number, number]))

  const getHexPercent = (hex: number) => +(hex / 255).toFixed(3) * 100

  const pq = [
    {
      color: 'red',
      fig: getHexPercent(rHex[0]),
      hex: rHex,
    },
    {
      color: 'green',
      fig: getHexPercent(gHex[1]),
      hex: gHex,
    },
    {
      color: 'blue',
      fig: getHexPercent(bHex[2]),
      hex: bHex,
    },
  ]
  pq.sort((a, b) => b.fig - a.fig)
  // console.log('pq', pq)

  const [high, mid, low] = pq

  const res: HexColor[] = [
    {
      color: 'black',
      r: ~~((rHex[0] + gHex[0] + bHex[0]) / 3),
      g: ~~((rHex[1] + gHex[1] + bHex[1]) / 3),
      b: ~~((rHex[2] + gHex[2] + bHex[2]) / 3),
    },
  ]

  if (high.fig - mid.fig >= 14 && mid.fig - low.fig < 14) {
    const [r, g, b] = high.hex
    res.push({ color: high.color, r, g, b })
  } else if (mid.fig - low.fig >= 14 && high.fig - mid.fig < 14) {
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
