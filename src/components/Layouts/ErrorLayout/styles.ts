import { styled } from '@/styles/stitches.config'

export const ErrorLayoutContainer = styled('div', {
  width: '100%',
  height: '100vh',

  display: 'flex',
})

export const ErrorLayoutContentContainer = styled('div', {
  width: '40%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ErrorLayoutContent = styled('div', {
  width: '100%',
  maxWidth: '500px',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const ErrorLayoutErrorContainer = styled('div', {
  display: 'flex',
  gap: '0.75rem',

  alignItems: 'center',
})

export const ErrorLayoutErrorText = styled('span', {
  fontSize: '1.25rem',
  fontWeight: '500',
})

export const ErrorLayoutTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})

export const ErrorPageTitle = styled('h1', {
  fontSize: '3rem',
  lineHeight: '120%',
  fontWeight: '600',
})

export const ErrorPageSubtitle = styled('h2', {
  fontSize: '1.25rem',
  lineHeight: '2rem',
  fontWeight: '500',
  color: '$gray-100',
})

export const ErrorPageImageContainer = styled('div', {
  backgroundImage: 'url(/banner-hero/games/hots-background.jpg)',
  flex: 1,
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
})
