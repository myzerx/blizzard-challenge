import { ThirdPartyPlatformIconsContainer } from './styles'
import React from 'react'
interface ThirdPartyPlatformIconsProps {
  icon: React.ReactNode
}

export function ThirdPartyPlatformIcons({
  icon,
}: ThirdPartyPlatformIconsProps) {
  return (
    <ThirdPartyPlatformIconsContainer>{icon}</ThirdPartyPlatformIconsContainer>
  )
}
