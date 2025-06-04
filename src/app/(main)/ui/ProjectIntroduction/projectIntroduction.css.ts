import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  color: 'white',
  textAlign: 'center',
  fontSize: '11px',
  fontWeight: 200,
  lineHeight: '11px',
})
