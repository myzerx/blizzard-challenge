import { styled } from '@stitches/react'

export const SportsDropdownContainer = styled('div', {
  display: 'flex',
  padding: '7rem 0 0 1rem',
})

export const SportsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',

  columnGap: '1.5rem',
  alignItems: 'baseline',
  padding: '3.6875rem 0 0 0',
})

export const IconsImage = styled('img', {
  display: 'flex',
})

export const SportsDropdownGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '& > *': {
    textAlign: 'center',
  },
})

export const SportsText = styled('span', {
  lineHeight: '120%',
  fontSize: '0.875rem',
  color: '$gray-100',
})
