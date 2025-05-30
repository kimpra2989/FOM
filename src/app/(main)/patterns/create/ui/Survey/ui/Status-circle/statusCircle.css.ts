import { Color } from '#/styles'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    userSelect: 'none',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    paddingTop: '100px',
    zIndex: 10,
  },

  variants: {
    background: {
      Red: { backgroundColor: Color.RED },
      Green: { backgroundColor: Color.GREEN },
      Blue: { backgroundColor: Color.BLUE },
    },
  },
})

export const statusText = style({
  display: 'block',
  textAlign: 'center',
  marginTop: '65px',
  fontWeight: 600,
})
