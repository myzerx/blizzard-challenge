import { createStitches } from '@stitches/react'

export const { styled, globalCss, theme, getCssText, keyframes } =
  createStitches({
    theme: {
      colors: {
        white: '#fff',
        black: '#000',
      },
      fonts: {
        sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      },
    },
  })
