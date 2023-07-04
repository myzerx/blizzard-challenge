import { styled } from '@stitches/react'

export const ExclusiveGamesContainer = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  background: '$black',
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

export const ExclusiveGamesTitles = styled('div', {
  display: 'flex',
  gap: '12rem',
})

export const ExclusiveGamesIcons = styled('div', {
  display: 'flex',
  gap: '27rem',
})

export const ExclusiveGridIcons = styled('div', {
  display: 'flex',
  gap: '1rem',
  width: '15%',
})

export const ExclusiveGamesAllGamesText = styled('span', {
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const ExclusiveGridGames = styled('div', {
  paddingTop: '4rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.5rem',
})
