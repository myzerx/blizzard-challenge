import Image from 'next/image'
import logoBlizzard from '../../../public/logo-blizzard.png'
import { GamesData } from '@/utils/games-data'
import { User } from '@phosphor-icons/react'
import { Button } from '../Buttons/Button'
import { useSelector } from 'react-redux'

import { useRouter } from 'next/router'

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
  const router = useRouter()
  const selectedId = useSelector((state: any) => state.selectedId)

  const handleClickLogin = () => {
    router.push('/login')
  }

  const selectedBackground = GamesData.find((game) => game.id === selectedId)

  const backgroundImage = selectedBackground
    ? selectedBackground.images.banner
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
              <Button
                size={'small'}
                variant={'primary'}
                onClick={handleClickLogin}
                weight={'normal'}
              >
                <User size={20} weight={'bold'} />
                Logar
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </HeaderHeader>
      </HeaderContainer>
    </BackgroundContainer>
  )
}
