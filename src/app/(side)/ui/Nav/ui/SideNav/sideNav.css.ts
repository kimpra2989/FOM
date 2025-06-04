import { Color, Font, ZIndex } from '#/styles/vars'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '30%',
    maxWidth: '500px',
    height: '100%',
    fontSize: '32px',
    zIndex: ZIndex.SIDEBAR,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(2px)',
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
  margin: '20px',
  marginBottom: '34px',
})

export const imageStyle = style({
  margin: '0 auto',
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
  },
  variants: {
    isActive: {
      active: {
        backgroundColor: Color.WHITE,
        color: '#141414',
        textAlign: 'end',
        marginRight: '20px',
      },
    },
  },
})
