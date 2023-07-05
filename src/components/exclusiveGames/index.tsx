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
} from './styles'

import { ThirdPartyPlatformIcons } from '../ThirdPartyPlatform/icons'
import battlenet from '../../../public/battlenet-mini-icon.svg'
import nintendo from '../../../public/nintendo-mini-icon.svg'
import xbox from '../../../public/xbox-mini-icon.svg'
import playstation from '../../../public/playstation-mini-icon.svg'
import logoBlizzard from '../../../public/logo-blizzard.png'
import groupBoxes from '../../../public/groupBoxes.svg'
import Image from 'next/image'

import { useGameData } from '../CustomHooks/useFetch/fetchGameData'
import { ProgressBar } from '../ProgressBar'

export default function ExclusiveGames() {
  const gameData = useGameData()
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
                <ThirdPartyPlatformIcons icon={battlenet} />
                <ThirdPartyPlatformIcons icon={nintendo} />
                <ThirdPartyPlatformIcons icon={xbox} />
                <ThirdPartyPlatformIcons icon={playstation} />
              </ExclusiveGridIcons>
              <ExclusiveGamesAllGames>
                <Image src={groupBoxes} alt="" />
                <ExclusiveGamesAllGamesText>
                  Ver todos os jogos
                </ExclusiveGamesAllGamesText>
              </ExclusiveGamesAllGames>
            </ExclusiveGamesIcons>
          </ExclusiveGamesFlexText>
        </ExclusiveGamesContent>
        <ExclusiveGamesGrid>
          {gameData.map((game) => (
            <ExclusiveGamesGridContainer key={game.id}>
              <ExclusiveGamesImageBackground>
                <img src={game.image} alt={game.name} />
                <ExclusiveGamesImageLogo>
                  <img src={game.logo} alt={game.name} />
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
          <ExclusiveGamesTileMoreGames>
            <Image src={logoBlizzard} alt="Blizzard Logo" />
            <ExclusiveGamesTileMoreGamesIcon>
              <Image src={groupBoxes} alt="" />
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
