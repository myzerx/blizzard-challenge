import { Button } from '../Buttons/Button'
import Image from 'next/image'

import GamesIcons from '../GamesIcons'

import {
  ContentContainer,
  HeaderContent,
  HeaderTilesTextContainer,
  HeaderTilesTitleText,
  HeaderTilesSubTitleText,
  ButtonContainer,
  ContainerLogoTrailer,
  LogoContainer,
  TrailerText,
  ContainerTrailer,
  GifContainer,
} from './styles'

import diablo4Logo from '../../../public/banner-hero/games/diablo-logo.png'

export default function Content() {
  return (
    <ContentContainer>
      <HeaderContent>
        <GamesIcons />
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
        <ContainerLogoTrailer>
          <LogoContainer>
            <Image src={diablo4Logo} alt="" />
          </LogoContainer>
          <ContainerTrailer>
            <TrailerText> ASSISTA O TRAILER</TrailerText>
            <GifContainer />
          </ContainerTrailer>
        </ContainerLogoTrailer>
      </HeaderContent>
    </ContentContainer>
  )
}
