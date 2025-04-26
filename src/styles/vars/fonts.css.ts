import { createGlobalVar, globalStyle } from '@vanilla-extract/css'

export const Font = {
  Weight: {
    bold: createGlobalVar('bold'),
  },
}

globalStyle(':root', {
  vars: {
    [Font.Weight.bold]: '800',
  },
})
