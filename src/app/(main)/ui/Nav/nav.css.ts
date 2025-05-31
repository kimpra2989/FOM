import { NavHeight, ZIndex } from '#/styles/vars'
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
  width: '31px',
  height: '34px',
  border: '0',
})
