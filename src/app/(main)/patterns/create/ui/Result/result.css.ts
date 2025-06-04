import { flexCenter } from '#/utils/styles'
import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('html, body', {
  '@media': {
    print: {
      visibility: 'hidden',
    },
  },
})

export const print = style({
  '@media': {
    print: {
      visibility: 'visible',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
})

export const buttons = style({
  width: '300px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '20px',
  padding: '12px 20px',
  border: '2px dashed red',
})

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 50px',
  gap: '20px',
})

export const left = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
})

export const leftTitle = style({
  fontWeight: 'bold',
  fontSize: '24px',
  // marginBottom: '30px',
  textAlign: 'center',
  marginBottom: '50px',
})

export const patternBox = style([
  flexCenter,
  {
    flexDirection: 'column',
    gap: '20px',
  },
])

export const right = style({
  backgroundColor: 'transparent',
})
