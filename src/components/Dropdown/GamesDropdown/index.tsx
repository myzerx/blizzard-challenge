import {
  GamesDropdownContainer,
  GamesDropdownGrid,
  GamesGrid,
  GameText,
  IconsImage,
} from './styles'
import { GamesDropdownIcons } from '@/utils/games-data'

export default function GamesDropdown() {
  return (
    <GamesDropdownContainer>
      <GamesGrid>
        {GamesDropdownIcons.map((game) => (
          <GamesDropdownGrid key={game.id}>
            <IconsImage src={game.images.icon} alt={game.name} />
            <GameText> {game.name}</GameText>
          </GamesDropdownGrid>
        ))}
      </GamesGrid>
    </GamesDropdownContainer>
  )
}
