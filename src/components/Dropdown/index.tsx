import { ReactNode } from 'react'
import {
  DropdownContainer,
  DropdownMenuBackground,
  DropdownFooter,
  DropdownMenu,
  DropdownFooterItems,
} from './styles'
import { NavbarOption } from '../Layouts/header'

export interface DropdownMenuProps {
  opened: NavbarOption | null
  setOpened: (opened: NavbarOption | null) => void
}

export interface DropdownMenuLink {
  icon: ReactNode
  label: string
}

export default function Dropdown({ opened, setOpened }: DropdownMenuProps) {
  const handleSpanClick = () => {
    setOpened(null)
  }

  const setHeight =
    opened?.name === 'Jogos'
      ? '640px'
      : opened?.name === 'Esportes'
      ? '520px'
      : ''

  return (
    <DropdownContainer>
      {opened && (
        <DropdownMenuBackground css={{ height: setHeight }}>
          <DropdownMenu>{opened.dropdown!.content}</DropdownMenu>
          <DropdownFooter>
            {opened.dropdown?.links.map((link, index) => (
              <DropdownFooterItems key={`link-${index}`}>
                <span onClick={handleSpanClick}>{link.icon}</span>
                <span onClick={handleSpanClick}>{link.label}</span>
              </DropdownFooterItems>
            ))}
          </DropdownFooter>
        </DropdownMenuBackground>
      )}
    </DropdownContainer>
  )
}
