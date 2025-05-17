import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  padding: '0 20px',
  alignItems: 'center',
  height: '100%',
})

export const left = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '100%',
})

export const right = style({
  display: 'flex',
  flexWrap: 'wrap',
  width: '30%',
  padding: '0 20px',
  gap: '30px',
})

export const colorBox = style([
  flexCenter,
  {
    width: '100px',
    height: '100px',
    border: '1px solid white',
  },
])

export const inputContainer = style({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '30px',
  border: '1px solid white',
  padding: '12px 20px',
})
