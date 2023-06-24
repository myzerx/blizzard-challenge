import { styled } from '@stitches/react'

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const ContentHeader = styled('header', {
  height: '94px',
  width: '100%',
})

export const HeaderContent = styled('div', {
  height: '100%',
  width: '100%',

  maxWidth: '1200px',

  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  columnGap: '8rem',
})
