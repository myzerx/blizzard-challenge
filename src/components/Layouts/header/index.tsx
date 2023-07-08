import Image from 'next/image'
import logoBlizzard from '../../../../public/logo-blizzard.png'
import { GamesData } from '@/utils/games-data'
import { CaretDown, User } from '@phosphor-icons/react'
import { Button } from '../../Buttons/Button'
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
  LogoBar,
  HeaderContainerLogoBar,
  HeaderNavsContainer,
  HeaderNavsIcon,
} from './styles'
import Dropdown from '@/components/Dropdown'
import { ReactNode, useState } from 'react'

export interface NavbarOption {
  name: string
  dropdown?: {
    content: ReactNode
  }
}

const HeaderNavOptions: NavbarOption[] = [
  {
    name: 'Jogos',
    dropdown: {
      content: '',
    },
  },
  {
    name: 'Esportes',
    dropdown: {
      content: '',
    },
  },
  {
    name: 'Loja',
  },
  {
    name: 'Notícias',
  },
  {
    name: 'Suporte',
  },
]

export default function Header() {
  const router = useRouter()
  const selectedId = useSelector((state: any) => state.selectedId)
  const [openedMenu, setOpenedMenu] = useState<NavbarOption | null>(null)

  const handleClickLogin = () => {
    router.push('/login')
  }

  function handleClickNavbarOption(option: NavbarOption) {
    if (!option.dropdown) {
      return
    }

    if (option.name === openedMenu?.name) {
      setOpenedMenu(null)
      return
    }

    setOpenedMenu(option)
  }

  const selectedBackground = GamesData.find((game) => game.id === selectedId)

  return (
    <BackgroundContainer>
      <BackgroundImage
        css={{
          backgroundImage: `url(${selectedBackground?.images.banner})`,
        }}
      />
      <Dropdown opened={openedMenu} setOpened={setOpenedMenu} />
      <HeaderContainer>
        <HeaderHeader>
          <HeaderContent>
            <HeaderContainerLogoBar>
              <Image src={logoBlizzard} alt="Blizzard Logo" />
              <LogoBar />
            </HeaderContainerLogoBar>

            <HeaderTabs>
              {HeaderNavOptions.map((option, index) => (
                <HeaderNavsContainer
                  key={`option-${index}`}
                  onClick={() => handleClickNavbarOption(option)}
                >
                  {option.name}
                  {option.dropdown && (
                    <HeaderNavsIcon active={option.name === openedMenu?.name}>
                      <CaretDown weight={'bold'} />
                    </HeaderNavsIcon>
                  )}
                </HeaderNavsContainer>
              ))}
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
