import { IconProps } from './IconProps'

export function GroupBoxes({ width, height, color }: IconProps) {
  return (
    <svg
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
    </svg>
  )
}