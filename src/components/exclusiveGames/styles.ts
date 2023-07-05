import { styled } from '@stitches/react'

export const ExclusiveGamesContainer = styled('div', {
  minHeight: '100vh',
  background: '$black',
  height: '1850px',
  marginTop: '4rem',
})

export const ExclusiveGamesHeader = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
})

export const ExclusiveGamesContent = styled('div', {
  display: 'flex',
  marginTop: '5rem',
})

export const ExclusiveGamesFlexText = styled('div', {
  display: 'flex',
  gap: '12rem',
})

export const ExclusiveGamesText = styled('span', {
  fontFamily: 'poppins',
  fontWeight: '600',

  color: '$gray-300',
})

export const ExclusiveGamesTitleText = styled('div', {
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: '110%',
})

export const ExclusiveGamesIcons = styled('div', {
  display: 'flex',
  gap: '27rem',
  padding: '2rem 0 0 0',
})

export const ExclusiveGridIcons = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  width: '8%',
  '&:hover': {
    cursor: 'pointer',
  },
})

export const ExclusiveGamesAllGames = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
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
})

export const ExclusiveGamesGridSubtitle = styled('div', {
  fontSize: '0.875rem',
  fontFamily: 'poppins',
  color: '$white',
  opacity: 0.6,
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
})

export const ExclusiveGamesTileMoreGamesIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.750rem',
  '&:hover': {
    cursor: 'pointer',
  },
})

export const ExclusiveGamesTileMoreGamesText = styled('span', {
  fontFamily: 'poppins',
  fontWeight: '600',
})
