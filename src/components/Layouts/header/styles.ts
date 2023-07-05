import { styled } from '@stitches/react'

export const BackgroundContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const BackgroundImage = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
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

export const HeaderHeader = styled('header', {
  height: '94px',

  border: '1px solid transparent',
  borderBottomColor: '$white',
})

export const HeaderContent = styled('div', {
  height: '100%',
  width: '100%',

  maxWidth: '1200px',

  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  columnGap: '8rem',
})

export const HeaderTabs = styled('nav', {
  display: 'flex',
  alignItems: 'center',

  columnGap: '2.8rem',

  flex: 1,
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
})
