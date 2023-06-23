import { styled } from '@/styles/stitches.config'

export const ThirdPartyBoxContainer = styled('div', {
  display: 'flex',
  width: '48px',
  height: '48px',

  borderRadius: '4px',

  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  transition: 'all 0.4s',

  '&:hover': {
    cursor: 'pointer',
    opacity: '0.7',
  },
})
