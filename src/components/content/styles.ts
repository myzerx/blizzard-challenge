import { styled } from '@stitches/react'
const imagePath = '/banner-hero/games/diablo-animation.gif'

export const ContentContainer = styled('div', {
  display: 'flex',
})

export const ContentHeader = styled('header', {
  display: 'flex',
  width: '100%',
})

export const HeaderContent = styled('div', {
  height: '100%',
  width: '100%',

  maxWidth: '1200px',

  margin: '0 auto',

  display: 'flex',
  columnGap: '8rem',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const HeaderTilesGrid = styled('div', {
  display: 'flex',
  flexFlow: 'column',
  marginTop: '200px',
  gap: '2rem',
})

export const HeaderTilesTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '3rem 0 0 0',
})

export const HeaderTilesTitleText = styled('text', {
  display: 'flex',
  fontSize: '4rem',
  fontFamily: 'poppins',
  fontWeight: 'bold',
  lineHeight: '110%',
  width: '550px',
})

export const HeaderTilesSubTitleText = styled('text', {
  display: 'flex',
  fontSize: '18px',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  padding: '20px 0 0 0',
})

export const ContainerLogoTrailer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const LogoContainer = styled('div', {
  display: 'flex',
  padding: '0 0 140px 0',
})

export const ContainerTrailer = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '-100px',
})

export const GifContainer = styled('div', {
  display: 'flex',
  width: '280px',
  height: '158px',

  backgroundImage: `url(${imagePath})`,
  backgroundSize: 'cover',
})
