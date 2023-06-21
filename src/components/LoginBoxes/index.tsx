import { BoxContainer } from './styles'

interface LoginBoxesProps {
  data: {
    displayColor: string
    displayIcon: string
  }
}

export function LoginBoxes({ data }: LoginBoxesProps) {
  return (
    <BoxContainer css={{ backgroundColor: data.displayColor }}>
      {data.displayIcon}
    </BoxContainer>
  )
}
