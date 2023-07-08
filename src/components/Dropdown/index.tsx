import {
  DropdownContainer,
  DropdownMenuBackground,
  DropdownFooter,
  DropdownMenu,
  DropdownFooterItems,
} from './styles'
import { NavbarOption } from '../Layouts/header'
import { ReactNode } from 'react'

export interface DropdownMenuProps {
  opened: NavbarOption | null
  setOpened: (opened: NavbarOption | null) => void
}

export interface DropdownMenuLink {
  icon: ReactNode
  label: string
}

export default function Dropdown({ opened, setOpened }: DropdownMenuProps) {
  return (
    <DropdownContainer>
      {opened && (
        <DropdownMenuBackground>
          <DropdownMenu> {opened?.dropdown!.content} </DropdownMenu>
          <DropdownFooter>
            {opened?.dropdown?.links.map((link, index) => (
              <DropdownFooterItems key={`link-${index}`}>
                <span> {link.icon}</span>
                <span> {link.label} </span>
              </DropdownFooterItems>
            ))}
          </DropdownFooter>
        </DropdownMenuBackground>
      )}
    </DropdownContainer>
  )
}
