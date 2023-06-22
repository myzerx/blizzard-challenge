import { createStitches } from '@stitches/react'

export const { styled, globalCss, theme, getCssText, keyframes } =
  createStitches({
    theme: {
      colors: {
        white: '#fff',
        black: '#000',

        'blue-300': '#1877F2',
        'blue-400': '#0070cc',

        'green-700': '#0a4f0a',
      },
      fonts: {
        sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      },
    },
  })
