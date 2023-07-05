import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '#15171E',
    color: '$white',
    fontFamily: 'poppins',
    fontWeight: '400',
  },

  'body, input, texstarea, button': {
    fontSize: '1rem',
    color: '$white',
  },
})
