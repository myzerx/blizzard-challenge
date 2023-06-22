import { styled } from '@/styles/stitches.config'

export const LoginContainer = styled('div', {
  display: 'flex',
  height: 'calc(100vh - 100px)',
  justifyContent: 'center',
  padding: '10px',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  paddingBottom: '5px',
})

export const LoginHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  position: 'relative',

  alignItems: 'center',
  justifyContent: 'center',
})

export const TitleText = styled('text', {
  color: '$white',
  fontSize: '36px',
  fontWeight: '700',
  fontFamily: 'sans-serif',
  margin: '40px 0 35px 0',
})

export const GridBoxes = styled('div', {
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '24px',
})

export const LineText = styled('div', {
  margin: '40px 0 18px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '18px',
})

export const SeparatorLineText = styled('div', {
  borderTop: '0.4px solid $white',
  opacity: '0.15',
  width: '128px',
  height: '0.1px',
  margin: '5px 0 0 0',
})

export const LineConnectText = styled('span', {
  color: '#FFFFFF99',
  fontWeight: 'bold',
  fontSize: '14px',
  fontFamily: '$sans',
})

export const InputContainer = styled('div', {
  display: 'flex',
})

export const InputLogin = styled('input', {
  width: '25.25rem',
  height: '2.4rem',
  paddingLeft: '0.8rem',
  border: '0.5px solid grey',
  borderRadius: '0.2rem',
  background: '#171920',
  color: 'Grey',
  fontWeight: 'bold',
  fontSize: '14px',
  margin: '18px 0 0 0',

  '&:hover': {
    border: '0.5px solid $white',
  },

  '&:focus': {
    outline: '1px solid #0074e0',
    '&:hover': {
      border: '0.5px solid #6ab7ff',
      transition: 'all 0.4s',
    },
  },
})

export const ButtonLogin = styled('button', {
  width: '420px',
  height: '40px',

  border: '0.5px  none',
  borderRadius: '0.2rem',
  backgroundColor: '#0074e0',
  margin: '40px 0 20px 0',

  '&:hover': {
    boxShadow: 'inset 0 0 0 1.5px #6ab7ff',
    cursor: 'pointer',
    transition: 'all 0.4s',
  },
})

export const ButtonText = styled('text', {
  color: '$white',
  fontWeight: 'bold',
  fontSize: '1rem',
})

export const TextAccountContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '2rem',
  gap: '1.4rem',
})

export const TextAccount = styled('text', {
  color: '#0074e0',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  '&:hover': {
    color: '#6ab7ff',
    cursor: 'pointer',
    transition: 'all 0.4s',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  },
})
