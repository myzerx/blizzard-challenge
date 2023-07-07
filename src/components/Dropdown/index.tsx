// components/Dropdown.js
import { useState } from 'react'
import {
  DropdownSpan,
  DropdownContainer,
  DropdownItem,
  DropdownMenuBackground,
  DropdownFooter,
  DropdownMenu,
  DropdownItemName,
  DropdownFooterItems,
  DropdownFooterItemsIcons,
} from './styles'
import { useGameData } from '../CustomHooks/useFetch/fetchGameData'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const gameData = useGameData()

  return (
    <DropdownContainer>
      <DropdownSpan onClick={() => setIsOpen(!isOpen)}>Jogos</DropdownSpan>
      {isOpen && (
        <DropdownMenuBackground>
          <DropdownMenu>
            {gameData.map((game) => (
              <DropdownItem key={game.id}>
                <DropdownItemName>
                  <img src={game.logo} alt={game.name} />
                  <span> {game.name} </span>
                </DropdownItemName>
              </DropdownItem>
            ))}
          </DropdownMenu>
          <DropdownFooter>
            <DropdownFooterItems>
              <DropdownFooterItemsIcons>
                <img src="" alt="icon" />
                <span> Ver todos os jogos</span>
              </DropdownFooterItemsIcons>
              <DropdownFooterItemsIcons>
                <img src="" alt="icon" />
                <span> Aplicativo Battlenet</span>
              </DropdownFooterItemsIcons>
              <DropdownFooterItemsIcons>
                <img src="" alt="icon" />
                <span> Downloads</span>
              </DropdownFooterItemsIcons>
              <DropdownFooterItemsIcons>
                <img src="" alt="icon" />
                <span> Foruns dos jogos</span>
              </DropdownFooterItemsIcons>
            </DropdownFooterItems>
          </DropdownFooter>
        </DropdownMenuBackground>
      )}
    </DropdownContainer>
  )
}
