import {
  ExclusiveGamesHeader,
  ExclusiveGamesContent,
  ExclusiveGamesContainer,
  ExclusiveGamesFlexText,
  ExclusiveGamesIcons,
  ExclusiveGridIcons,
  ExclusiveGamesAllGames,
  ExclusiveGamesGrid,
  ExclusiveGamesGridText,
  ExclusiveGamesGridTitle,
  ExclusiveGamesGridSubtitle,
  ExclusiveGamesImageBackground,
  ExclusiveGamesImageLogo,
  ExclusiveGamesGridContainer,
  ExclusiveGamesTileMoreGames,
  ExclusiveGamesTitleText,
  ExclusiveGamesTileMoreGamesIcon,
  ExclusiveGamesTileMoreGamesText,
  ExclusiveGamesText,
  ExclusiveGamesAllGamesText,
  ExclusiveGamesTile,
  ExclusiveGamesTileIcon,
} from './styles'

import { ThirdPartyPlatformIcons } from '../ThirdPartyPlatform/icons'

import logoBlizzard from '../../../public/logo-blizzard.png'

import Image from 'next/image'

import { useGameData } from '../CustomHooks/useFetch/fetchGameData'
import { ProgressBar } from '../ProgressBar'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GroupBoxes } from '../Icons/GroupBoxes'
import { NintendoMiniIcon } from '../Icons/exclusiveGames/Nintendo-mini-Icon'
import { XboxMiniIcon } from '../Icons/exclusiveGames/Xbox-mini-Icon'
import { PlaystationMiniIcon } from '../Icons/exclusiveGames/Playstation-mini-icon'
import { BattlenetMiniIcon } from '../Icons/Battlenet-mini-Icon'

export default function ExclusiveGames() {
  const gameData = useGameData()

  useEffect(() => {
    AOS.init({
      duration: 500,
    })
  }, [])

  return (
    <ExclusiveGamesContainer>
      <ProgressBar />
      <ExclusiveGamesHeader>
        <ExclusiveGamesContent>
          <ExclusiveGamesFlexText>
            <ExclusiveGamesText> GAMES </ExclusiveGamesText>
            <ExclusiveGamesTitleText>Jogos exclusivos</ExclusiveGamesTitleText>
            <ExclusiveGamesIcons>
              <ExclusiveGridIcons>
                <ThirdPartyPlatformIcons
                  icon={
                    <BattlenetMiniIcon
                      width={'20'}
                      height={'20'}
                      color={'white'}
                    />
                  }
                />
                <ThirdPartyPlatformIcons
                  icon={
                    <NintendoMiniIcon
                      width={'20'}
                      height={'20'}
                      color={'white'}
                    />
                  }
                />
                <ThirdPartyPlatformIcons
                  icon={
                    <XboxMiniIcon width={'20'} height={'20'} color={'white'} />
                  }
                />
                <ThirdPartyPlatformIcons
                  icon={
                    <PlaystationMiniIcon
                      width={'20'}
                      height={'20'}
                      color={'white'}
                    />
                  }
                />
              </ExclusiveGridIcons>
              <ExclusiveGamesAllGames>
                <GroupBoxes width={'9'} height={'10'} color={'#00AEFF'} />
                <ExclusiveGamesAllGamesText>
                  Ver todos os jogos
                </ExclusiveGamesAllGamesText>
              </ExclusiveGamesAllGames>
            </ExclusiveGamesIcons>
          </ExclusiveGamesFlexText>
        </ExclusiveGamesContent>
        <ExclusiveGamesGrid>
          {gameData.map((game) => (
            <ExclusiveGamesGridContainer data-aos="fade-right" key={game.id}>
              <ExclusiveGamesImageBackground>
                <ExclusiveGamesTile src={game.image} alt={game.name} />
                <ExclusiveGamesImageLogo>
                  <ExclusiveGamesTileIcon src={game.logo} alt={game.name} />
                </ExclusiveGamesImageLogo>
              </ExclusiveGamesImageBackground>
              <ExclusiveGamesGridText>
                <ExclusiveGamesGridTitle>{game.name}</ExclusiveGamesGridTitle>
                <ExclusiveGamesGridSubtitle>
                  {game.category}
                </ExclusiveGamesGridSubtitle>
              </ExclusiveGamesGridText>
            </ExclusiveGamesGridContainer>
          ))}
          <ExclusiveGamesTileMoreGames data-aos="fade-right">
            <Image src={logoBlizzard} alt="Blizzard Logo" />
            <ExclusiveGamesTileMoreGamesIcon>
              <GroupBoxes width={'9'} height={'10'} color={'white'} />
              <ExclusiveGamesTileMoreGamesText>
                Ver todos os jogos
              </ExclusiveGamesTileMoreGamesText>
            </ExclusiveGamesTileMoreGamesIcon>
          </ExclusiveGamesTileMoreGames>
        </ExclusiveGamesGrid>
      </ExclusiveGamesHeader>
    </ExclusiveGamesContainer>
  )
}
