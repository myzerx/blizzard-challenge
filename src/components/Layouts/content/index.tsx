import { Button } from '../../Buttons/Button'
import Image from 'next/image'
import { User } from '@phosphor-icons/react'
import { GamesData } from '@/utils/games-data'
import { useSelector } from 'react-redux'
import GamesIcons from '../../GamesIcons'

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
  PlayButtonTrailer,
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
            {selectedGame?.released ? (
              <Button weight={'bold'} size={'medium'}>
                Jogue agora
              </Button>
            ) : (
              <Button weight={'bold'} size={'full'}>
                <User size={20} weight={'bold'} />
                <span> Reserve agora na pré-venda </span>
              </Button>
            )}
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
                position: 'relative',
                backgroundImage: `url(${selectedGame?.images.cover})`,
                transition: 'background-image 0.3s ease-in-out',

                '&:hover': {
                  backgroundImage: `url(${selectedGame?.images.gif})`,
                  cursor: 'pointer',
                },
                '&:hover div': {
                  visibility: 'hidden',
                },
              }}
            >
              <PlayButtonTrailer />
            </GifContainer>
          </ContainerTrailer>
        </ContainerLogoTrailer>
      </HeaderContent>
    </ContentContainer>
  )
}
