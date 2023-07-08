import {
  DropdownContainer,
  DropdownMenuBackground,
  DropdownFooter,
  DropdownMenu,
  DropdownFooterItems,
  DropdownFooterItemsIcons,
} from './styles'
import { NavbarOption } from '../Layouts/header'

export interface DropdownMenuProps {
  opened: NavbarOption | null
  setOpened: (opened: NavbarOption | null) => void
}

export default function Dropdown({ opened, setOpened }: DropdownMenuProps) {
  return (
    <DropdownContainer>
      {opened && (
        <DropdownMenuBackground>
          <DropdownMenu> teste </DropdownMenu>
          <DropdownFooter>
            <DropdownFooterItems>
              <DropdownFooterItemsIcons>
                <img src="" alt="icon" />
                <span> Ver todos os jogos</span>
              </DropdownFooterItemsIcons>
            </DropdownFooterItems>
          </DropdownFooter>
        </DropdownMenuBackground>
      )}
    </DropdownContainer>
  )
}
