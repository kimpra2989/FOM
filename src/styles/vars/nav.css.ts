import { createGlobalVar, globalStyle } from '@vanilla-extract/css'

export const NavHeight = createGlobalVar('nav-height')

globalStyle(':root', {
  vars: {
    [NavHeight]: '60px',
  },
})
