import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

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
  justifyContent: 'space-around',
  padding: '100px 200px',
  gap: '20px',
})

export const left = style({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '20px',
})

export const colorBox = style([
  flexCenter,
  {
    width: '100px',
    height: '100px',
    border: '1px solid white',
  },
])
