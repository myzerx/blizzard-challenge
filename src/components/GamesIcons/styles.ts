import { styled } from '@stitches/react'

export const ContainerIcons = styled('div', {
  display: 'flex',
})

export const ContainerGrid = styled('div', {
  display: 'grid',
  flexDirection: 'row',
  gap: '1.5rem',

  '@media (max-width: 768px)': { display: 'grid', gridTemplateRows: 'rows' },
})

export const Icon = styled('img', {
  variants: {
    isSelected: {
      true: {
        filter: 'none',
        transition: '.50s',
      },
      false: {
        filter: 'grayscale(100%)',
        transition: '.50s',
      },
    },
  },

  '&:hover': {
    cursor: 'pointer',
  },
})
