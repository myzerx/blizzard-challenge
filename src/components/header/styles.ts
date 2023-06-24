import { styled } from '@stitches/react'

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
})

export const HeaderHeader = styled('header', {
  height: '94px',
  width: '100%',

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
