import { ContainerIcons, ContainerGrid, Icon } from './styles'
import { useState } from 'react'

export default function GamesIcons() {
  const icons = [
    {
      id: 1,
      name: 'diablo4Icon',
      src: '/banner-hero/icons/game-1.png',
    },
    {
      id: 2,
      name: 'hearthstoneIcon',
      src: '/banner-hero/icons/game-2.png',
    },
    {
      id: 3,
      name: 'wowIcon',
      src: '/banner-hero/icons/game-3.png',
    },
    {
      id: 4,
      name: 'diabloIcon',
      src: '/banner-hero/icons/game-4.png',
    },
    {
      id: 5,
      name: 'starcraftIcon',
      src: '/banner-hero/icons/game-5.png',
    },
  ]

  const [selectedIcon, setSelectedIcon] = useState(1)

  const handleIconClick = (iconId: any) => {
    setSelectedIcon(iconId)
  }

  return (
    <ContainerIcons>
      <ContainerGrid>
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            src={icon.src}
            alt={icon.name}
            isSelected={selectedIcon === icon.id}
            onClick={() => handleIconClick(icon.id)}
          />
        ))}
      </ContainerGrid>
    </ContainerIcons>
  )
}
