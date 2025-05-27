import { Color, Font, ZIndex } from '#/styles/vars'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '144px',
    height: '100%',
    fontSize: '32px',
    zIndex: ZIndex.SIDEBAR,
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.13) 4.77%, rgba(255, 255, 255, 0.08) 28.39%, rgba(255, 255, 255, 0.21) 89.49%)',
    color: 'white',
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

export const logo = style({
  display: 'block',
  width: '24px',
  height: '24px',
  border: '0',
  backgroundColor: 'white',
  margin: '20px',
  marginBottom: '34px',
})

export const linkContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
})

export const linkItem = recipe({
  base: {
    display: 'block',
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: Font.Weight.bold,
    padding: '0 20px',

    selectors: {
      '&:nth-child(4)': {
        marginTop: '27px',
        paddingTop: '5px',
        paddingBottom: '5px',
      },
    },
  },
  variants: {
    background: {
      active: {
        backgroundColor: Color.WHITE,
        color: '#141414',
      },
    },
  },
})
