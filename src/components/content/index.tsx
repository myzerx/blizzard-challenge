import { Button } from '../Buttons/Button'
import Image from 'next/image'

import { GamesData } from '@/utils/games-data'
import { useSelector } from 'react-redux'
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

export default function Content() {
  const selectedId = useSelector((state: any) => state.selectedId)

  const selectedGame = GamesData.find((game) => game.id === selectedId)

  const selectedLogo = selectedGame?.images.logo || ''

  return (
    <ContentContainer>
      <HeaderContent>
        <GamesIcons />
        <HeaderTilesTextContainer>
          <HeaderTilesTitleText>
            {selectedGame?.texts.title}
          </HeaderTilesTitleText>
          <HeaderTilesSubTitleText>
            {selectedGame?.texts.subtitle}
          </HeaderTilesSubTitleText>
          <ButtonContainer>
            <Button weight={'bold'} size={'medium'}>
              Jogue agora
            </Button>
          </ButtonContainer>
        </HeaderTilesTextContainer>
        <ContainerLogoTrailer>
          <LogoContainer>
            <Image src={selectedLogo} alt="" width={280} height={154} />
          </LogoContainer>
          <ContainerTrailer>
            <TrailerText> ASSISTA O TRAILER</TrailerText>
            <GifContainer
              css={{
                backgroundImage: `url(${selectedGame?.images.gif})`,
              }}
            />
          </ContainerTrailer>
        </ContainerLogoTrailer>
      </HeaderContent>
    </ContentContainer>
  )
}
