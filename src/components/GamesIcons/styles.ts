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

  '@media (max-width: 1439px)': {
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    margin: '24.5rem 0 0 0.5rem',
  },

  '@media (min-width: 375px) and (max-width: 767px)': {
    position: 'absolute',

    margin: '25rem 0 0 0.1rem',
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
