// components/Dropdown.jsx
import { useEffect, useRef, ReactNode } from 'react'
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
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpened(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpened])

  const setHeight =
    opened?.name === 'Jogos'
      ? '640px'
      : opened?.name === 'Esportes'
      ? '520px'
      : ''

  return (
    <DropdownContainer>
      {opened && (
        <DropdownMenuBackground css={{ height: setHeight }} ref={dropdownRef}>
          <DropdownMenu>{opened?.dropdown!.content}</DropdownMenu>
          <DropdownFooter>
            {opened?.dropdown?.links.map((link, index) => (
              <DropdownFooterItems key={`link-${index}`}>
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </DropdownFooterItems>
            ))}
          </DropdownFooter>
        </DropdownMenuBackground>
      )}
    </DropdownContainer>
  )
}
