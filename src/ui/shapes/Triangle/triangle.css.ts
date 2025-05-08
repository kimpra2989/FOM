import { style } from '@vanilla-extract/css'

export const triangleStyle = style({
  display: 'block',
  width: '138px',
  height: '120px',
  userSelect: 'none',
  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
})
