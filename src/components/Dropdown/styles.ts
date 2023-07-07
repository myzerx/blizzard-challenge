import { styled } from '@stitches/react'

export const DropdownContainer = styled('div', {})

export const DropdownSpan = styled('span', {
  display: 'flex',
  position: 'relative',

  zIndex: 1,
  cursor: 'pointer',
})

export const DropdownMenuBackground = styled('div', {
  position: 'absolute',

  background:
    'linear-gradient(180deg, #020203 0%, rgba(14, 17, 23, 0.92) 96.35%);',
  backdropFilter: 'blur(6px)',

  left: 0,
  top: 0,

  width: '100%',
  height: '640px',
  overflow: ' hidden',
})

export const DropdownMenu = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  margin: '0 auto',
  width: '1200px',
  gap: '2rem',
  padding: '150px 0 0 0',

  columnGap: '2.8rem',
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
  left: 0,
  top: 570,
})

export const DropdownFooterItems = styled('div', {
  display: 'flex',
  gap: '5rem',
})

export const DropdownFooterItemsIcons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})