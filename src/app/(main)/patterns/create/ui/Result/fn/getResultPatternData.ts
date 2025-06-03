import { getColorComposition } from './helper'

function getResultPatternData(answer: number[]) {
  // color
  const r = answer.slice(2, 5)
  const g = answer.slice(7, 10)
  const b = answer.slice(12, 15)
  const colors = getColorComposition(r, g, b)

  // shape
  const red = answer.slice(0, 2)
  const green = answer.slice(5, 7)
  const blue = answer.slice(10, 12)

  return {
    colors,
    shapes: {
      red,
      green,
      blue,
    },
  }
}

export default getResultPatternData
