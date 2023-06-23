import Image from 'next/image'
import { ThirdPartyPlatformIconsContainer } from './styles'

interface ThirdPartyPlatformIconsProps {
  icon: string
}

export function ThirdPartyPlatformIcons({
  icon,
}: ThirdPartyPlatformIconsProps) {
  return (
    <ThirdPartyPlatformIconsContainer>
      <Image src={icon} alt="ThirdPartyIcon" />
    </ThirdPartyPlatformIconsContainer>
  )
}
