import { ReactNode, useEffect, useRef, useState } from 'react'
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
  const overlayRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isClickInside, setIsClickInside] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !isClickInside &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setOpened(null)
      }
      setIsClickInside(false)
    }

    function handleMouseDownInsideDropdown() {
      setIsClickInside(true)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('mousedown', handleMouseDownInsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('mousedown', handleMouseDownInsideDropdown)
    }
  }, [setOpened, isClickInside])

  const setHeight =
    opened?.name === 'Jogos'
      ? '640px'
      : opened?.name === 'Esportes'
      ? '520px'
      : ''

  return (
    <DropdownContainer ref={overlayRef}>
      {opened && (
        <DropdownMenuBackground css={{ height: setHeight }}>
          <DropdownMenu ref={dropdownRef}>
            {opened.dropdown!.content}
          </DropdownMenu>
          <DropdownFooter>
            {opened.dropdown?.links.map((link, index) => (
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
