import { styled } from '@stitches/react'

export const BackgroundContainer = styled('div', {
  width: '100%',
  height: '100%',
})

export const BackgroundImage = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  zIndex: -1,
  transition: '.15s',
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const HeaderContainerLogoBar = styled('div', {
  display: 'flex',
  gap: '1.6rem',
  padding: '1.75rem 0 0 0',
  flexDirection: 'column',
})

export const LogoBar = styled('div', {
  height: '0.1875rem',
  width: '2.6875rem',
  background: '$blue-200',
})

export const HeaderHeader = styled('header', {
  height: '94px',
  border: '1px solid transparent',

  borderBottomColor: '$white-opacity-10',
  zIndex: 9999,
})

export const HeaderContent = styled('div', {
  height: '100%',
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '11.5rem',
})

export const HeaderTabs = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '3rem',
  flex: 1,
})

export const HeaderNavsContainer = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
})

export const HeaderNavsIcon = styled('div', {
  display: 'flex',
  transition: '.15s',

  color: '$gray-100',
  variants: {
    active: {
      true: {
        color: '$blue-200',
        transform: 'rotate(180deg)',
      },
    },
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
})

export const ButtonsText = styled('text', {
  fontSize: '0.9rem',
  fontWeight: '500',
  fontFamily: 'poppins',
})
