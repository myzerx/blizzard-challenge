import { styled } from '@stitches/react'

export const FooterContainer = styled('div', {})

export const FooterHeader = styled('div', {
  display: 'flex',
  maxWidth: '1200px',
  minHeight: '90vh',
  margin: '0 auto',
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
})

export const BackgroundInside = styled('div', {
  position: 'absolute',
  top: '20rem',
  left: '13rem',
})
