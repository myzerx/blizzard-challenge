import { styled } from '@stitches/react'

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
  alignItems: 'center',

  columnGap: '8rem',
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
  fontSize: '3rem',
  fontWeight: 'bold',
  lineHeight: '110%',
  width: '375px',
})

export const HeaderTilesSubTitleText = styled('text', {
  display: 'flex',
  fontSize: '18px',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  padding: '20px 0 0 0',
})
