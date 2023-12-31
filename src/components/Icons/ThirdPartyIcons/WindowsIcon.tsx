import { IconProps } from '../IconProps'

export function WindowsIcon({ width, height, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 640 640"
    >
      <path
        d="M.2 298.669L0 90.615l256.007-34.76v242.814H.201zM298.658 49.654L639.905-.012v298.681H298.657V49.654zM640 341.331l-.071 298.681L298.669 592V341.332h341.33zM255.983 586.543L.189 551.463v-210.18h255.794v245.26z"
        fill={color}
      />
    </svg>
  )
}
