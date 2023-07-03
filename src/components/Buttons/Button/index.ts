import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '3.375rem',
  gap: '0.5rem',
  color: '$white',

  borderRadius: '0.25rem',

  border: 'none',

  transition: '0.1s transform ease-in-out',

  '&:hover': {
    transform: 'scale(1.01)',
    cursor: 'pointer',
  },

  variants: {
    size: {
      small: {
        width: '7.25rem',
        height: '2.575rem',
      },
      medium: {
        width: '12.5rem',
      },
      full: {
        width: '60%',
      },
    },
    weight: {
      normal: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '600',
      },
    },
    variant: {
      primary: {
        background: '$blue-200',
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
