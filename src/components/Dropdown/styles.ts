import { keyframes, styled } from '@stitches/react'

export const DropdownContainer = styled('div', {})

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-100%)' },
})

export const DropdownMenuBackground = styled('div', {
  position: 'absolute',
  zIndex: 9998,
  background:
    'linear-gradient(180deg, #020203 0%, rgba(14, 17, 23, 0.92) 96.35%);',
  backdropFilter: 'blur(6px)',

  left: 0,
  top: 0,

  width: '100%',

  overflow: ' hidden',

  transition: 'all 0.35s',
  animation: `${slideIn} 0.35s`,
  '&.slide-out': {
    animation: `${slideOut} 0.35s`,
  },
})

export const DropdownMenu = styled('div', {
  margin: '0 auto',
  width: '1350px',
})

export const DropdownItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const DropdownItemName = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
})

export const DropdownFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  height: '70px',
  background: '#15171B',
  bottom: 0,
  columnGap: '5rem',
})

export const DropdownFooterItems = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  fontWeight: 'bold',

  '&:hover': {
    filter: 'brightness(65%)',
    cursor: 'pointer',
  },
})
