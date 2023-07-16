import { styled } from '@stitches/react'

export const ContentContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '9rem 0 0 0',

  '@media (min-width: 375px) and (max-width: 768px)': {
    padding: '0 0 0 0',
  },
})

export const HeaderContent = styled('div', {
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '8rem',

  '@media (min-width: 1440px)': { maxWidth: '1200px', columnGap: '6rem' },
  '@media (max-width: 768px) ': {
    maxWidth: '650px',
    columnGap: '0rem',
  },
  '@media (min-width: 375px) and (max-width: 768px)': {
    maxWidth: '325px',
    columnGap: '0rem',
    gridTemplateColumns: 'repeat(1, 1fr)',
    height: '450px',
  },
})

export const HeaderTilesTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 6rem 4rem 0',
  '@media (max-width: 768px) ': {
    padding: '0 0 0 0',
  },
})

export const HeaderTilesTitleText = styled('text', {
  fontSize: '4rem',
  fontFamily: 'poppins',
  fontWeight: '700',
  lineHeight: '110%',
  width: '610px',
  '@media (max-width: 768px) ': {
    fontSize: '3.5rem',
    width: '550px',
    padding: '1rem 0 0 0',
  },

  '@media (min-width: 375px) and (max-width: 768px)': {
    fontSize: '2.5rem',
    width: '305px',
  },
})

export const HeaderTilesSubTitleText = styled('text', {
  fontSize: '1.125rem',
  fontWeight: '400',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  padding: '1.25rem 0 0 0',
  width: '60%',
  '@media (max-width: 768px) ': {
    padding: '.20rem 0 0 0',
  },
  '@media (min-width: 375px) and (max-width: 768px)': {
    padding: '0 0 0 0',
    span: {
      fontSize: '0.7rem',
    },
  },
})

export const ContainerLogoTrailer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  marginTop: '-2rem',
  gap: '10rem',

  '@media (max-width: 768px) ': {
    marginLeft: '-11rem',
    marginTop: '-7rem',
    gap: '16rem',
  },
  '@media (min-width: 375px) and (max-width: 768px)': { display: 'none' },
})

export const LogoContainer = styled('div', {
  display: 'flex',
})

export const TrailerText = styled('text', {
  fontFamily: 'poppins',
  fontSize: '13px',
  fontWeight: '600',
  '@media (max-width: 768px) ': {
    display: 'none',
  },
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

export const PlayButtonTrailer = styled('div', {
  position: 'absolute',
  top: 80,
  left: 140,
  transform: 'translate(-50%, -50%)',
  width: '50px',
  height: '50px',
  backgroundImage: 'url(/playButtonTrailer.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
})
