import { createGlobalVar, globalStyle } from '@vanilla-extract/css'

export const ZIndex = {
  NAV: createGlobalVar('nav'),
  SIDEBAR: createGlobalVar('aside-menu'),
}

globalStyle(':root', {
  vars: {
    [ZIndex.NAV]: '10',
    [ZIndex.SIDEBAR]: '20',
  },
})
