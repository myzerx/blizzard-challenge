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
  ButtonsText,
} from './styles'
import Dropdown, { DropdownMenuLink } from '@/components/Dropdown'
import { ReactNode, useState } from 'react'
import GamesDropdown from '@/components/Dropdown/GamesDropdown'
import SportsDropdown from '@/components/Dropdown/SportsDropdown'
import { ThirdPartyPlatformIcons } from '@/components/ThirdPartyPlatform/icons'
import { BattlenetMiniIcon } from '@/components/Icons/Battlenet-mini-Icon'
import { GroupBoxes } from '@/components/Icons/GroupBoxes'
import { DownloadIcon } from '@/components/Icons/DownloadIcon'
import { ChatIcon } from '@/components/Icons/ChatIcon'
import { TournamentIcon } from '@/components/Icons/TournamentIcon'

export interface NavbarOption {
  name: string
  dropdown?: {
    content: ReactNode
    links: DropdownMenuLink[]
  }
}

const HeaderNavOptions: NavbarOption[] = [
  {
    name: 'Jogos',
    dropdown: {
      content: <GamesDropdown />,
      links: [
        {
          icon: (
            <ThirdPartyPlatformIcons
              icon={<GroupBoxes width="9px" height="10px" color={'#00AEFF'} />}
            />
          ),
          label: 'Ver todos os jogos',
        },
        {
          icon: (
            <ThirdPartyPlatformIcons
              icon={
                <BattlenetMiniIcon
                  width="24px"
                  height="24px"
                  color={'#00AEFF'}
                />
              }
            />
          ),
          label: 'Aplicativo Battle.net',
        },
        {
          icon: (
            <ThirdPartyPlatformIcons
              icon={
                <DownloadIcon width="24px" height="24px" color={'#00AEFF'} />
              }
            />
          ),
          label: 'Downloads',
        },
        {
          icon: (
            <ThirdPartyPlatformIcons
              icon={<ChatIcon width="24px" height="24px" color={'#00AEFF'} />}
            />
          ),
          label: 'Fóruns dos jogos',
        },
      ],
    },
  },
  {
    name: 'Esportes',
    dropdown: {
      content: <SportsDropdown />,
      links: [
        {
          icon: (
            <ThirdPartyPlatformIcons
              icon={
                <TournamentIcon width="24px" height="24px" color={'#00AEFF'} />
              }
            />
          ),
          label: 'Torneios da comunidade',
        },
      ],
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
                <ButtonsText> Criar Conta </ButtonsText>
              </Button>
              <Button
                size={'small'}
                variant={'primary'}
                onClick={handleClickLogin}
                weight={'normal'}
              >
                <User size={20} weight={'bold'} />
                <ButtonsText> Logar </ButtonsText>
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </HeaderHeader>
      </HeaderContainer>
    </BackgroundContainer>
  )
}
