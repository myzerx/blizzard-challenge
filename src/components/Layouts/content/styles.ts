import { styled } from '@stitches/react'

export const ContentContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '9rem 0 0 0',
})

export const HeaderContent = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '8rem',
  alignItems: 'center',
})

export const HeaderTilesTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 0 4rem 0',
})

export const HeaderTilesTitleText = styled('text', {
  fontSize: '4em',
  fontFamily: 'poppins',
  fontWeight: '700',
  lineHeight: '110%',
  width: '610px',
})

export const HeaderTilesSubTitleText = styled('text', {
  fontSize: '18px',
  fontWeight: '400',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  padding: '1.25rem 0 0 0',
})

export const ContainerLogoTrailer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  gap: '8rem',
})

export const LogoContainer = styled('div', {
  display: 'flex',
})

export const TrailerText = styled('text', {
  fontFamily: 'poppins',
  fontSize: '13px',
  fontWeight: '600',
})

export const ContainerTrailer = styled('div', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-end',
  gap: '1rem',
})

export const GifContainer = styled('div', {
  width: '280px',
  height: '158px',

  backgroundSize: 'cover',
})
