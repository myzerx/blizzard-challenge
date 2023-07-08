import { styled } from '@stitches/react'

export const ContainerIcons = styled('div', {
  display: 'flex',
})

export const ContainerGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'colums',
  gap: '1.5rem',
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
