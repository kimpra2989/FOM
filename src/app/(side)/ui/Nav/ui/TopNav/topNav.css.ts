import { Font, NavHeight, ZIndex } from '#/styles/vars'
import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

export const navContainer = style([
  flexCenter,
  {
    position: 'fixed',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    width: '100%',
    height: NavHeight,
    padding: '0 20px',
    zIndex: ZIndex.NAV,
    backgroundColor: 'transparent',
    color: 'white',
  },
])

export const navTitle = style({
  fontWeight: Font.Weight.bold,
})

export const asideOpenButton = style({
  width: '24px',
  height: '24px',
  border: '0',
  backgroundColor: 'white',
})
