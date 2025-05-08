import { Font } from '#/styles/recipes'
import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const circleRecipe = recipe({
  base: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    border: '1px solid white',
    boxSizing: 'border-box',
    userSelect: 'none',
  },
  variants: {
    border: {
      no: { border: 0 },
    },
  },
})

export const withImage = style([
  circleRecipe({ border: 'no' }),
  {
    border: 0,
    overflow: 'hidden',
  },
])

export const withText = style([
  circleRecipe(),
  flexCenter,
  {
    color: 'white',
  },
  Font({ weight: 'bold' }),
])

export const innerImage = style({
  width: '150px',
})
