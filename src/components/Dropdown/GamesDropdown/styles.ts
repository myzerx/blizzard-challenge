import { styled } from '@stitches/react'

export const GamesDropdownContainer = styled('div', {
  display: 'flex',
  padding: '10.375rem 0 0 5rem',
})

export const GamesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '5rem',
  columnGap: '6.5rem',
  alignItems: 'baseline',
})

export const IconsImage = styled('img', {
  display: 'flex',
  width: '4.3125rem',
  height: '4.3125rem',
})

export const GamesDropdownGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.875rem',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& > *': {
    textAlign: 'center',
  },
})

export const GameText = styled('span', {
  lineHeight: '120%',
  fontSize: '0.875rem',
  color: '$gray-100',
})
