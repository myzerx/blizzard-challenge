import { styled } from '@/styles/stitches.config'
import { Eye, EyeSlash } from '@phosphor-icons/react'

export const LoginContainer = styled('div', {
  display: 'flex',
  height: 'calc(100vh - 100px)',
  justifyContent: 'center',
  padding: '0.625rem',
  overflow: 'hidden',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  paddingBottom: '-.25rem',
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
  fontSize: '2rem',
  fontWeight: '600',
  fontFamily: 'poppins',
  margin: '2.5rem 0 2.1875rem 0',
})

export const GridBoxes = styled('div', {
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '1.5rem',

  '@media (max-width: 575px)': {
    flexWrap: 'wrap',
    width: '365px',

    '& > *': {
      flexBasis: 'calc(23% - 30px)',
    },
  },
})

export const LineText = styled('div', {
  margin: '2.5rem 0 1.125rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.125rem',
})

export const SeparatorLineText = styled('div', {
  borderTop: '0.4px solid $white',
  opacity: '0.15',
  width: '128px',
  height: '0.1px',
  margin: '0.3125rem 0 0 0',
  '@media (max-width: 575px)': {
    width: '95px',
  },
})

export const LineConnectText = styled('span', {
  color: '$gray-100',
  fontWeight: 'bold',
  fontSize: '0.875rem',
  fontFamily: '$sans',
})

export const InputContainer = styled('div', {
  position: 'relative',
})

export const InputLogin = styled('input', {
  width: '25.25rem',
  height: '2.4rem',
  paddingLeft: '0.8rem',
  border: '0.5px solid grey',
  borderRadius: '0.2rem',
  background: '#171920',
  color: '$white',

  fontSize: '1rem',
  margin: '1.125rem 0 0 0',

  '&:hover': {
    border: '0.5px solid $white',
  },

  transition: 'all 0.4s',
  '&:focus': {
    outline: '1px solid $blue-400',
    '&:hover': {
      border: '0.5px solid $blue-100',
    },
  },
  '&::placeholder': {
    color: 'gray',
  },

  '@media (max-width: 575px)': {
    width: '330px',
  },
})

export const EyeIcon = styled(Eye, {
  position: 'absolute',
  top: '65%',
  right: '0.9375rem',
  transform: 'translateY(-50%)',
  cursor: 'pointer',

  color: '$blue-100',
  fontWeight: 'bold,',
})

export const EyeSlashIcon = styled(EyeSlash, {
  position: 'absolute',
  top: '65%',
  right: '15px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',

  color: '$blue-100',
})

export const ButtonLogin = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '0.5rem 1rem',

  width: '100%',
  height: '100%',

  maxHeight: '2.5rem',

  border: '0.5px  none',
  borderRadius: '0.2rem',
  backgroundColor: '$blue-400',
  margin: '2.5rem 0 1.25rem 0',

  transition: 'all 0.4s',
  '&:hover': {
    boxShadow: 'inset 0 0 0 1.5px $blue-100',
    cursor: 'pointer',
  },

  '@media (max-width: 575px)': {
    width: '21.5rem',
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
  color: '$blue-400',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  transition: 'all 0.4s',
  '&:hover': {
    color: '$blue-100',
    cursor: 'pointer',

    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  },
})
