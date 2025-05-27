import { NavHeight } from '#/styles'
import { flexCenter } from '#/utils/styles'
import { style } from '@vanilla-extract/css'

const uncheckedStyles = style({
  backgroundColor: 'white',
  opacity: '0.47',
})

const checkedStyles = style({
  selectors: {
    'input:checked + &': {
      backgroundColor: 'white',
      opacity: '0.96',
    },
  },
})

export const filterStyles = style([
  flexCenter,
  {
    position: 'fixed',
    zIndex: 10,
    top: `calc(${NavHeight} - 9px)`,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'fit-content',
    margin: '0 auto',
    gap: '7px',
    borderRadius: '12px',
    padding: '7px 16px',
    background: 'rgb(255 255 255 / 0.32)',
  },
])

export const circleStyles = style([
  checkedStyles,
  uncheckedStyles,
  {
    width: '13px',
    height: '13px',
    borderRadius: '50%',
  },
])

export const triangleStyles = style([
  checkedStyles,
  uncheckedStyles,
  {
    width: '15px',
    height: '13px',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  },
])

export const squareStyles = style([
  checkedStyles,
  uncheckedStyles,
  {
    width: '11px',
    height: '11px',
  },
])
