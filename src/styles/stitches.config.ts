import { createStitches } from '@stitches/react'

export const { styled, globalCss, theme, getCssText, keyframes } =
  createStitches({
    theme: {
      colors: {
        white: '#fff',
        black: '#000',

        'white-opacity-10': 'rgba(255, 255, 255, 0.1)',

        'gray-100': '#FFFFFF99',
        'gray-300': '#8F9199',

        'blue-000': '#61CDFF',
        'blue-100': '#6ab7ff',
        'blue-200': '#00AEFF',
        'blue-300': '#148eff',
        'blue-400': '#0070cc',
        'blue-500': '#0074e0',
        'blue-600': '#1877F2',

        'green-700': '#107c10',

        red: '#e60012',
      },
      fonts: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        poppins: 'Poppins',
      },
    },
  })
