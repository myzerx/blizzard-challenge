import {
  ExclusiveGamesHeader,
  ExclusiveGamesContent,
  ExclusiveGamesContainer,
  ExclusiveGamesTitles,
  ExclusiveGamesIcons,
  ExclusiveGridIcons,
  ExclusiveGamesAllGamesText,
  ExclusiveGridGames,
} from './styles'

import { ThirdPartyPlatformIcons } from '../ThirdPartyPlatform/icons'
import battlenet from '../../../public/battlenet-mini-icon.svg'
import nintendo from '../../../public/nintendo-mini-icon.svg'
import xbox from '../../../public/xbox-mini-icon.svg'
import playstation from '../../../public/playstation-mini-icon.svg'

import { useGameData } from '../CustomHooks/useFetch/fetchGameData'

export default function ExclusiveGames() {
  const gameData = useGameData()
  return (
    <ExclusiveGamesContainer>
      <ExclusiveGamesHeader>
        <ExclusiveGamesContent>
          <ExclusiveGamesTitles>
            <span> GAMES </span>
            <span> Jogos exclusivos </span>
            <ExclusiveGamesIcons>
              <ExclusiveGridIcons>
                <ThirdPartyPlatformIcons icon={battlenet} />
                <ThirdPartyPlatformIcons icon={nintendo} />
                <ThirdPartyPlatformIcons icon={xbox} />
                <ThirdPartyPlatformIcons icon={playstation} />
              </ExclusiveGridIcons>
              <ExclusiveGamesAllGamesText>
                ver todos os jogos
              </ExclusiveGamesAllGamesText>
            </ExclusiveGamesIcons>
          </ExclusiveGamesTitles>
        </ExclusiveGamesContent>
        <ExclusiveGridGames>
          {gameData !== null ? (
            gameData.map((game) => (
              <div key={game.id}>
                <img src={game.image} alt={game.name} />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ExclusiveGridGames>
      </ExclusiveGamesHeader>
    </ExclusiveGamesContainer>
  )
}
