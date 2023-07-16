import { styled } from '@stitches/react'

export const ContainerIcons = styled('div', {
  display: 'flex',
})

export const ContainerGrid = styled('div', {
  display: 'grid',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '0 0 5.5rem 0',

  alignContent: 'center',

  '@media (max-width: 768px)': {
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    margin: '12.5rem 0 0 12.5rem',
  },
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
        '&:hover': {
          cursor: 'pointer',
          filter: 'grayscale(30%)',
        },
      },
    },
  },
})
