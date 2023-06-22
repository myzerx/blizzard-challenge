import { styled } from '@/styles/stitches.config'

export const BoxContainer = styled('div', {
  display: 'flex',
  width: '48px',
  height: '48px',

  borderRadius: '4px',

  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  '&:hover': {
    cursor: 'pointer',
    opacity: '0.7',
    transition: 'all 0.4s',
  },
})
