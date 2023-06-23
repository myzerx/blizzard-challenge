import { styled } from '@stitches/react'

export const ApplicationLayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
})

export const ApplicationLayoutHead = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: '464px',
  width: '100%',

  background: '$gray900',
})

export const ApplicationLayoutHeader = styled('header', {
  height: '94px',
  width: '100%',

  border: '1px solid transparent',
  borderBottomColor: '$gray800',
})

export const ApplicationLayoutHeaderContent = styled('div', {
  height: '100%',
  width: '100%',

  maxWidth: '1200px',

  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  columnGap: '4rem',
})

export const ApplicationLayoutNavigation = styled('nav', {
  display: 'flex',
  alignItems: 'center',

  columnGap: '3rem',

  flex: 1,
})
