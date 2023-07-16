import { IconProps } from './IconProps'

import { styled } from '@stitches/react'

export function GroupBoxes({ width, height, color }: IconProps) {
  return (
    <IconSVG
      width={width}
      height={height}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="3" height="3" fill={color} />
      <rect y="6.5" width="3" height="3" fill={color} />
      <rect x="6" y="0.5" width="3" height="3" fill={color} />
      <rect x="6" y="6.5" width="3" height="3" fill={color} />
    </IconSVG>
  )
}

const IconSVG = styled('svg', {
  '@media (min-width: 375px) and (max-width: 768px)': { display: 'none' },
})
