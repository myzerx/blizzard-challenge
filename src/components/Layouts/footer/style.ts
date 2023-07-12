import { styled } from '@stitches/react'

export const FooterContainer = styled('div', {
  '@media (max-width: 1440px)': { width: '1640px' },

  '@media (max-width: 768px)': {},

  '@media (max-width: 375px)': {},
})

export const FooterHeader = styled('div', {
  display: 'flex',
  maxWidth: '1200px',
  minHeight: '830px',
  margin: '0 auto',

  '@media (max-width: 1440px)': { height: '830px' },

  '@media (max-width: 768px)': {},

  '@media (max-width: 375px)': {},
})

export const FooterContent = styled('div', {
  display: 'flex',
  marginTop: '5rem',
  flexDirection: 'column',
  maxWidth: '450px',
  width: '100%',
  gap: '1.5rem',
})

export const FooterTitle = styled('span', {
  fontSize: '2rem',
  fontWeight: '600',
  fontFamily: 'poppins',
})

export const FooterDownloadTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const FooterDownloadTextContainerIcon = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
})

export const FooterDownloadText = styled('span', {
  fontFamily: 'poppins',
  fontSize: '1.125rem',
  lineHeight: '178%',
  color: '#828792',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 0 0 0',
})

export const FooterMobileApplicationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 0 0 0',
})

export const FooterMobileApplicationText = styled('span', {
  width: '250px',
  fontFamily: 'poppins',
  fontSize: '0.875rem',
  lineHeight: '120%',
})

export const Teste = styled('div', {
  position: 'sticky',
})

export const BackgroundGrid = styled('div', {
  position: 'absolute',
  top: '-2rem',
  left: '-5rem',

  '@media (max-width: 1440px)': { left: '-12rem' },

  '@media (max-width: 375px)': {},
})

export const BackgroundInside = styled('div', {
  position: 'absolute',
  top: '20rem',
  left: '13rem',

  '@media (max-width: 1440px)': { left: '5.5rem' },

  '@media (max-width: 375px)': {},
})
