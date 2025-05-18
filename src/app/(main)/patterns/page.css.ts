import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

export const imageWrapper = style({
  marginTop: '-60px',
  width: '100%',
  height: '100vh',
})

export const innerImage = style([
  flexCenter,
  {
    height: '100%',
  },
])
