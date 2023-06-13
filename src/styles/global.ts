import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '$black',
    color: '$white',
  },

  'body, input, texstarea, button': {},
})
