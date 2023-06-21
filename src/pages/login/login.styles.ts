import { styled } from '@/styles/stitches.config'

export const LoginContainer = styled('div', {
  display: 'flex',
  height: 'calc(100vh - 100px)',
  justifyContent: 'center',
})

export const ImageContainer = styled('div', {
  display: 'flex',
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
  fontSize: '32px',
  fontWeight: 'bold',
  padding: '10px',
  margin: '40px 0 40px 0',
})

export const GridBoxes = styled('div', {
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '24px',
})

export const LineText = styled('div', {
  margin: '40px 0 24px 0',
})

export const InputContainer = styled('div', {
  display: 'flex',
})

export const InputLogin = styled('input', {
  width: '25.25rem',
  height: '2.5rem',
  paddingLeft: '0.8rem',
  border: '0.5px solid grey',
  borderRadius: '0.2rem',
  background: '#171920',
  color: 'Grey',
  fontWeight: 'bold',
  fontSize: '14px',
  margin: '15px 0 0 0',
})

export const ButtonLogin = styled('button', {
  width: '420px',
  height: '40px',

  border: '0.5px  none',
  borderRadius: '0.2rem',
  backgroundColor: '#0074e0',
  margin: '50px 0 0 0',

  '&:hover': {
    boxShadow: 'inset 0 0 0 1.5px #6ab7ff',
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
  gap: '1.2rem',
})

export const TextAccount = styled('text', {
  color: '$blue-400',
  fontWeight: 'bold',
  fontSize: '1.1rem',
})
