import { ReactNode } from 'react'
import { BoxContainer } from './styles'

interface LoginBoxesProps {
  displayColor: string
  icon: ReactNode
}
export function LoginBoxes({ displayColor, icon }: LoginBoxesProps) {
  return (
    <BoxContainer css={{ backgroundColor: displayColor }}>{icon}</BoxContainer>
  )
}
