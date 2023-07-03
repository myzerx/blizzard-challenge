import { ContainerIcons, ContainerGrid, Icon } from './styles'
import { GamesData } from '@/utils/games-data'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedId } from '../../redux/store'

export default function GamesIcons() {
  const dispatch = useDispatch()
  const selectedId = useSelector((state: any) => state.selectedId)

  const handleIconClick = (iconId: any) => {
    dispatch(setSelectedId(iconId))
  }

  return (
    <ContainerIcons>
      <ContainerGrid>
        {GamesData.map((game) => (
          <Icon
            key={game.id}
            src={game.images.icon}
            alt={game.name}
            isSelected={selectedId === game.id}
            onClick={() => handleIconClick(game.id)}
          />
        ))}
      </ContainerGrid>
    </ContainerIcons>
  )
}
