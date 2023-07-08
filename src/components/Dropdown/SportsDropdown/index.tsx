import {
  SportsDropdownContainer,
  SportsDropdownGrid,
  SportsGrid,
  SportsText,
  IconsImage,
} from './styles'
import { SportsDropdownIcons } from '@/utils/games-data'

export default function SportsDropdown() {
  return (
    <SportsDropdownContainer>
      <SportsGrid>
        {SportsDropdownIcons.map((game) => (
          <SportsDropdownGrid key={game.id}>
            <IconsImage src={game.images.icon} alt={game.name} />
            <SportsText> {game.name}</SportsText>
          </SportsDropdownGrid>
        ))}
      </SportsGrid>
    </SportsDropdownContainer>
  )
}
