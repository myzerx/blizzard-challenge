import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '#15171E',
    color: '$white',
    fontFamily: '$sans',
  },

  'body, input, texstarea, button': { fontWeight: '400', fontSize: '1rem' },
})
