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
  transition: '0.35s transform ease-in-out',
  '&:hover': {
    transform: 'scale(1.10)',
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
        width: '100%',
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
        position: 'relative',
        overflow: 'hidden',

        '&::after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: 0,
          background: '$white',
          display: 'block',
          bottom: 0,
          left: 0,
          zIndex: -1,
          transition: 'all ease 0.4s',
        },

        '&:hover': {
          color: '$black',

          '&::after': {
            height: '100%',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'full',
    variant: 'primary',
  },
})
