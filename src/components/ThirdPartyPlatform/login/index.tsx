import { ReactNode } from 'react'
import { ThirdPartyBoxContainer } from './styles'

interface ThirdPartyPlatformLoginProps {
  displayColor: string
  icon: ReactNode
}
export function ThirdPartyPlatformLogin({
  displayColor,
  icon,
}: ThirdPartyPlatformLoginProps) {
  return (
    <ThirdPartyBoxContainer css={{ backgroundColor: displayColor }}>
      {icon}
    </ThirdPartyBoxContainer>
  )
}
