import { IconProps } from '../IconProps'

export function NintendoIcon({ width, height, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      id="nintendo-switch"
      width={width}
      height={height}
      fill={color}
    >
      <path
        d="M13.15 6A7.15 7.15 0 0 0 6 13.15V27a6.94 6.94 0 0 0 6.94 7h6.57V6Zm4.09 25.71h-4.3A4.67 4.67 0 0 1 8.27 27V13.23a5 5 0 0 1 5-5h4ZM27.06 6h-4.65v28h4.65A6.94 6.94 0 0 0 34 27.06V13a6.94 6.94 0 0 0-6.94-7Zm.84 18.26a2.83 2.83 0 1 1 2.83-2.83 2.83 2.83 0 0 1-2.83 2.85ZM13 17.05a2.62 2.62 0 1 1 2.62-2.62A2.61 2.61 0 0 1 13 17.05Z"
        data-name="Nintendo Switch"
      ></path>
    </svg>
  )
}
