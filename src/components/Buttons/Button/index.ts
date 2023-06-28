import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  columnGap: '0.875rem',

  color: '$white',

  borderRadius: '0.25rem',

  border: 'none',

  transition: '0.1s transform ease-in-out',

  '&:hover': {
    transform: 'scale(1.01)',
  },

  variants: {
    size: {
      small: {
        width: '7.25rem',
        height: '2.575rem',
      },
      medium: {
        width: '10.5rem',
        height: '3.375rem',
      },
      full: {
        width: '100%',
      },
    },
    weight: {
      bold: {
        fontWeight: '600',
      },
    },
    variant: {
      primary: {
        background: '$blue-500',
      },
      outline: {
        background: 'transparent',
        border: '1px solid $white',
      },
    },
  },

  defaultVariants: {
    size: 'full',
    variant: 'primary',
  },
})
