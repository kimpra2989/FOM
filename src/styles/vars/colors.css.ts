import { createGlobalVar, globalStyle } from '@vanilla-extract/css'

export const Color = {
  RED: createGlobalVar('red'),
  GREEN: createGlobalVar('green'),
  BLUE: createGlobalVar('blue'),
  BLACK: createGlobalVar('black'),
}

globalStyle(':root', {
  vars: {
    [Color.RED]: 'red',
    [Color.GREEN]: 'green',
    [Color.BLUE]: 'blue',
    [Color.BLACK]: 'black',
  },
})
