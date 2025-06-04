import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '40px',
  maxWidth: '400px',
})

export const labelStyle = style({
  userSelect: 'none',
  height: '72px',
  padding: '0 16px',
  fontWeight: 500,
  fontSize: '26px',
})

export const range = style({
  appearance: 'none',
  width: '100%',
  height: '12px',
  borderRadius: '5px',
  background: '#ddd',
  outline: 'none',
  cursor: 'pointer',

  selectors: {
    '&::-webkit-slider-runnable-track': {
      height: '12px',
      borderRadius: '6px',
      background: 'white',
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      background: 'red',
      marginTop: '-6px', // 트랙 중앙 정렬
      cursor: 'pointer',
      border: 'none',
      transition: 'background 0.2s ease',
    },
    '&:active::-webkit-slider-thumb': {
      background: '#c40000', // active 시 어두운 빨강
    },
  },
})

export const answerContainer = style({
  width: '120%',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '14px',
  fontWeight: 300,
  gap : '20px',
  // padding: '0 -20px'
})

export const answer = style({
  width: '30%',
})
