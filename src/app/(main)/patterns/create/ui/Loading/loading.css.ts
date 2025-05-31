import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

export const container = style([
  flexCenter,
  {
    height: '100%',
    transform: 'translateY(-20%)'
  },
])
