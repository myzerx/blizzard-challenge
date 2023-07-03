import {
  ExclusiveGamesHeader,
  ExclusiveGamesContent,
  ExclusiveGamesContainer,
  ExclusiveGamesTitles,
  ExclusiveGamesIcons,
  ExclusiveGridIcons,
} from './styles'

import { ThirdPartyPlatformIcons } from '../ThirdPartyPlatform/icons'
import battlenet from '../../../public/battlenet-mini-icon.svg'
import nintendo from '../../../public/nintendo-mini-icon.svg'
import xbox from '../../../public/xbox-mini-icon.svg'
import playstation from '../../../public/playstation-mini-icon.svg'

export default function ExclusiveGames() {
  return (
    <ExclusiveGamesContainer>
      <ExclusiveGamesHeader>
        <ExclusiveGamesContent>
          <ExclusiveGamesTitles>
            <span> Games </span>
            <span> Jogos exclusivos </span>
            <ExclusiveGamesIcons>
              <ExclusiveGridIcons>
                <ThirdPartyPlatformIcons icon={battlenet} />
                <ThirdPartyPlatformIcons icon={nintendo} />
                <ThirdPartyPlatformIcons icon={xbox} />
                <ThirdPartyPlatformIcons icon={playstation} />
              </ExclusiveGridIcons>
              <span> ver todos os jogos </span>
            </ExclusiveGamesIcons>
          </ExclusiveGamesTitles>
        </ExclusiveGamesContent>
      </ExclusiveGamesHeader>
    </ExclusiveGamesContainer>
  )
}
