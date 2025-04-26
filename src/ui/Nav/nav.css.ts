import { Font, NavHeight, ZIndex } from '#/styles/vars'
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
    zIndex: ZIndex.SIDEBAR,
    justifyContent: 'space-between',
    color: 'white',
  },
])

export const asideOpenButton = style({
  border: '0',
})

export const navTitle = style({
  fontWeight: Font.Weight.bold,
  cursor: 'pointer',
})
