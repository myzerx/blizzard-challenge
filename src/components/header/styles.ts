import { styled } from '@stitches/react'
const imagePath = '/banner-hero/games/diablo-bg.png'

export const BackgroundContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const BackgroundImage = styled('div', {
  position: 'fixed',
  top: -50,
  left: 0,
  width: '100%',
  height: '125%',

  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.35)) ,url(${imagePath})`,
  fillOpacity: '0.8',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  zIndex: -1,
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

export const ButtonCreateAccount = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  background: 'transparent',
  alignItems: 'center',
  width: '112px',
  height: '40px',
  border: '1px solid $white',
  borderRadius: '4px',
})

export const ButtonLogin = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  background: '#00AEFF',
  alignItems: 'center',
  width: '112px',
  height: '40px',
  border: '1px solid transparent',
  borderRadius: '4px',
})

export const ButtonText = styled('text', {
  color: '$white',
})
