import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

export const imageWrapper = style({
  marginTop: '-60px',
  width: '100%',
  height: '100vh',
})

export const innerImage = style([
  flexCenter,
  {
    height: '100%',
  },
])

// TODO : 공통 css 분리
export const buttonWrapper = style({
  position: 'fixed',
  left: '50%',
  top: '80px',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  gap: '16px',
})

export const button = style({
  padding: '6px 12px',
  backgroundColor: 'black',
})
