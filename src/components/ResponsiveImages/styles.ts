import { styled } from '@stitches/react'

export const ContainerImages = styled('div', {
  position: 'absolute',
})

export const ImageOne = styled('img', {
  position: 'absolute',
  margin: '-750px 0 0 740px',
  maxWidth: '1000px',
  width: '1053px',
  height: '609.84px',

  '@media (min-width: 2560px) ': {
    margin: '-750px 0 0 1200px',
  },

  '@media (min-width: 1440px) and (max-width: 1745px)': {
    maxWidth: '750px',
    margin: '-750px 0 0 640px',
  },

  '@media (min-width: 768px) and (max-width: 1439px)': {
    overflow: 'hidden',
    marginTop: '-650px',
    marginLeft: '350px',
    width: '897px',
    height: '506px',
    maxWidth: '400px',
  },

  '@media (min-width: 375px) and (max-width: 767px) ': {
    overflow: 'hidden',
    marginTop: '-270px',
    marginLeft: '-35px',
    width: '408px',
    height: '268px',
  },
})

export const ImageTwo = styled('img', {
  position: 'absolute',
  width: '562px',
  height: '346px',
  margin: '-450px 0 0 930px',
  maxWidth: '550px',

  '@media (min-width: 2560px) ': {
    margin: '-450px 0 0 1390px',
  },

  '@media (min-width: 1440px) and (max-width: 1745px)': {
    maxWidth: '750px',
    margin: '-450px 0 0 765px',
  },

  '@media (max-width: 768px)': {
    margin: '-450px 0 0 420px',

    maxWidth: '300px',
  },

  '@media (min-width: 375px) and (max-width: 767px) ': {
    marginTop: '-180px',
    marginLeft: '30px',
    width: '276px',
    height: '169px',
  },
})
