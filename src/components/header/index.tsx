import Image from 'next/image'
import logoBlizzard from '../../../public/logo-blizzard.png'
import { Button } from '../Buttons/Button'
import { useSelector } from 'react-redux'

import {
  HeaderContainer,
  HeaderHeader,
  HeaderContent,
  HeaderTabs,
  ButtonContainer,
  BackgroundContainer,
  BackgroundImage,
} from './styles'

export default function Header() {
  const selectedId = useSelector((state: any) => state.selectedId)

  const backgroundById = [
    {
      id: 1,
      name: 'diablo4Icon',
      backgroundSrc: '/banner-hero/games/diablo-bg.png',
    },
    {
      id: 2,
      name: 'hearthstoneIcon',
      backgroundSrc: '/banner-hero/games/hearthstone-bg.png',
    },
    {
      id: 3,
      name: 'wowIcon',
      backgroundSrc: '/banner-hero/games/wow-bg.png',
    },
  ]

  const selectedBackground = backgroundById.find(
    (item) => item.id === selectedId,
  )

  const backgroundImage = selectedBackground
    ? selectedBackground.backgroundSrc
    : ''

  return (
    <BackgroundContainer>
      <BackgroundImage
        css={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.35)) , url(${backgroundImage})`,
        }}
      />
      <HeaderContainer>
        <HeaderHeader>
          <HeaderContent>
            <Image src={logoBlizzard} alt="Blizzard Logo" />
            <HeaderTabs>
              <span>Jogos</span>
              <span>Esportes</span>
              <span>Loja</span>
              <span>Noticias</span>
              <span>Suporte</span>
            </HeaderTabs>

            <ButtonContainer>
              <Button size={'small'} variant={'outline'}>
                Criar Conta
              </Button>
              <Button size={'small'} variant={'primary'}>
                Logar
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </HeaderHeader>
      </HeaderContainer>
    </BackgroundContainer>
  )
}
