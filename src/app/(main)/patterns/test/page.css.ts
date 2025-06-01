import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridAutoFlow: 'column',
  padding: '100px 200px',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  color: 'white',
})
