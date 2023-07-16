import { styled } from '@stitches/react'

export const ExclusiveGamesContainer = styled('div', {
  minHeight: '100vh',
  background: '$black',
  height: '1850px',
  marginTop: '4rem',

  '@media (min-width: 1440px)': { marginTop: '1rem' },
  '@media (max-width: 768px) ': {
    marginTop: '1rem',
  },
  '@media (min-width: 375px) and (max-width: 768px)': { marginTop: '0.3rem' },
})

export const ExclusiveGamesHeader = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',

  '@media (max-width: 768px) ': {
    maxWidth: '700px',
  },
  '@media (min-width: 375px) and (max-width: 768px)': { maxWidth: '325px' },
})

export const ExclusiveGamesContent = styled('div', {
  display: 'flex',
  marginTop: '5rem',
})

export const ExclusiveGamesFlexText = styled('div', {
  display: 'flex',
  gap: '12rem',

  '@media (max-width: 768px) ': { gap: '4rem' },
  '@media (min-width: 375px) and (max-width: 768px)': { gap: '1rem' },
})

export const ExclusiveGamesText = styled('span', {
  fontFamily: 'poppins',
  fontWeight: '600',

  color: '$gray-300',
  '@media (max-width: 768px) ': {
    display: 'none',
  },
})

export const ExclusiveGamesTitleText = styled('div', {
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: '110%',
  '@media (min-width: 375px) and (max-width: 768px)': { fontSize: '1.75rem' },
})

export const ExclusiveGamesIcons = styled('div', {
  display: 'flex',
  gap: '27rem',
  padding: '2rem 0 0 0',
  '@media (min-width: 1440px)': { gap: '20rem', padding: '2rem 0 0 0' },
  '@media (max-width: 768px) ': {
    gap: '8rem',
    padding: '2rem 0 0 2rem',
  },
  '@media (min-width: 375px) and (max-width: 768px)': {
    gap: '2rem',
    padding: '2rem 0 0 0',
  },
})

export const ExclusiveGridIcons = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  width: '8%',

  '&:hover': {
    cursor: 'pointer',
  },

  '@media (max-width: 768px) ': { width: '25%' },
  '@media (min-width: 375px) and (max-width: 768px)': { display: 'none' },
})

export const ExclusiveGamesAllGames = styled('div', {
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',

  '&:hover': {
    filter: 'brightness(65%)',
    cursor: 'pointer',
  },
})

export const ExclusiveGamesAllGamesText = styled('span', {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: '$blue-000',
})

export const ExclusiveGamesGrid = styled('div', {
  paddingTop: '4rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.5rem',

  '@media (max-width: 768px) ': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },

  '@media (min-width: 375px) and (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.875rem',
  },
})

export const ExclusiveGamesGridContainer = styled('div', {
  display: 'grid',
  img: {
    borderRadius: '8px',
  },
})

export const ExclusiveGamesImageBackground = styled('div', {
  position: 'relative',
  transition: '0.1s transform ease-in-out',
  '&:hover': {
    transform: 'scale(1.10)',
    cursor: 'pointer',
  },
})

export const ExclusiveGamesImageLogo = styled('div', {
  position: 'absolute',
  top: '250px',
  left: '67px',
  '@media (max-width: 768px) ': {
    top: 180,
    left: 50,
  },
  '@media (min-width: 375px) and (max-width: 768px)': { top: 150, left: 40 },
})

export const ExclusiveGamesGridText = styled('div', {
  padding: '1rem 0 1rem 0',
  display: 'flex',
  flexDirection: 'column',
})

export const ExclusiveGamesGridTitle = styled('div', {
  fontWeight: '600',
  fontSize: '1.1875rem',
  fontFamily: 'poppins',
  '@media (min-width: 375px) and (max-width: 768px)': { display: 'none' },
})

export const ExclusiveGamesGridSubtitle = styled('div', {
  fontSize: '0.875rem',
  fontFamily: 'poppins',
  color: '$white',
  opacity: 0.6,
  '@media (min-width: 375px) and (max-width: 768px)': { display: 'none' },
})

export const ExclusiveGamesTileMoreGames = styled('div', {
  display: 'flex',
  borderOpacity: '0.7',
  flexDirection: 'column',
  border: '2px solid #212428',
  borderRadius: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  height: '414px',

  '@media (min-width: 1440px)': { width: '17.9375rem', height: '24.5625rem' },
  '@media (max-width: 768px) ': {
    width: '12.875rem',
    height: '17.5625rem',
  },
  '@media (min-width: 375px) and (max-width: 768px)': {
    width: '9.9375rem',
    height: '13.625rem',
  },
})

export const ExclusiveGamesTileMoreGamesIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.750rem',
  '&:hover': {
    filter: 'brightness(65%)',
    cursor: 'pointer',
  },
  '@media (min-width: 375px) and (max-width: 768px)': { fontSize: '0.875rem' },
})

export const ExclusiveGamesTileMoreGamesText = styled('span', {
  fontFamily: 'poppins',
  fontWeight: '600',
})

export const ExclusiveGamesTile = styled('img', {
  '@media (min-width: 1440px)': { width: '17.9375rem', height: '24.5625rem' },
  '@media (max-width: 768px) ': {
    width: '12.875rem',
    height: '17.5625rem',
  },
  '@media (min-width: 375px) and (max-width: 768px)': {
    width: '9.9375rem',
    height: '13.625rem',
  },
})

export const ExclusiveGamesTileIcon = styled('img', {
  '@media (min-width: 1440px)': { width: '9.25rem', height: '6.125rem' },
  '@media (max-width: 768px) ': {
    width: '6.625rem',
    height: '4.375rem',
  },
  '@media (min-width: 375px) and (max-width: 768px)': {
    width: '5.125rem',
    height: '3.375rem',
  },
})
