import { Font, NavHeight, ZIndex } from '#/styles/vars'
import { style } from '@vanilla-extract/css'

export const navContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: NavHeight,
  padding: '0 20px',
  zIndex: ZIndex.SIDEBAR,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  color: 'white',
})

export const asideOpenButton = style({
  width: '24px',
  height: '24px',
  border: '0',
  backgroundColor: 'white'
})

export const navTitle = style({
  fontWeight: Font.Weight.bold,
  cursor: 'pointer',
})
