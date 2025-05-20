import { style } from '@vanilla-extract/css'

export const canvasStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  zIndex: 5,
  backgroundColor: 'rgb(0, 0, 0, 0.74)',
})

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
  border: '1px solid white',
})
