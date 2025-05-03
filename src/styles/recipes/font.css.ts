import { recipe } from '@vanilla-extract/recipes'

export const Font = recipe({
  base: {
    textAlign: 'center',
    lineHeight: '20px',
  },
  variants: {
    weight: {
      bold: { fontWeight: 800 },
    },
  },
})
