import { NavHeight, ZIndex } from '#/styles/vars'
import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

export const navContainer = style([
  flexCenter,
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: NavHeight,
    padding: '0 20px',
    zIndex: ZIndex.ASIDE,
    justifyContent: 'space-between',
  },
])

export const asideOpenButton = style({
  border: '0',
})
