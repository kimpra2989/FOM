import { Font } from '#/styles/recipes'
import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const squareRecipe = recipe({
  base: {
    width: '116px',
    height: '116px',
    border: '1px solid white',
    boxSizing: 'border-box',
  },
  variants: {
    border: {
      no: { border: 0 },
    },
  },
})

export const withImage = style([
  squareRecipe({ border: 'no' }),
  {
    border: 0,
    overflow: 'hidden',
  },
])

export const withText = style([
  squareRecipe(),
  flexCenter,
  {
    color: 'white',
  },
  Font({ weight: 'bold' }),
])

export const innerImage = style({
  width: '150px',
})
