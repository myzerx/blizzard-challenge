import { Button } from '../Buttons/Button'
import {
  ContentContainer,
  ContentHeader,
  HeaderContent,
  HeaderTilesGrid,
  HeaderTilesTextContainer,
  HeaderTilesTitleText,
  HeaderTilesSubTitleText,
  ButtonContainer,
} from './styles'

export default function Content() {
  return (
    <ContentContainer>
      <ContentHeader>
        <HeaderContent>
          <HeaderTilesGrid>
            <h1>icon1</h1>
            <h1>icon2</h1>
            <h1>icon3</h1>
            <h1>icon4</h1>
            <h1>icon5</h1>
          </HeaderTilesGrid>
          <HeaderTilesTextContainer>
            <HeaderTilesTitleText>
              Retorne à escuridão com o game Diablo IV
            </HeaderTilesTitleText>
            <HeaderTilesSubTitleText>
              O retorno de Lilith traz uma era de escuridão e sofrimento
            </HeaderTilesSubTitleText>
            <ButtonContainer>
              <Button weight={'bold'} size={'medium'}>
                Jogue agora
              </Button>
            </ButtonContainer>
          </HeaderTilesTextContainer>
        </HeaderContent>
      </ContentHeader>
    </ContentContainer>
  )
}
