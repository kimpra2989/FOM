import { Font, ZIndex } from '#/styles/vars'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '300px',
    height: '100vh',
    color: 'white',
    fontSize: '32px',
    background: 'rgba(0, 0, 0, 0.81)',
    padding: '60px 20px 20px',
    zIndex: ZIndex.SIDEBAR,
    transition: 'transform .1s ease-in',

    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  variants: {
    status: {
      close: {
        transform: 'translateX(-100%)',
      },
      open: {
        transform: 'translateX(0%)',
      },
    },
  },
})

export const linkItem = style({
  display: 'block',
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: Font.Weight.bold,
  padding: '0 20px',
})
