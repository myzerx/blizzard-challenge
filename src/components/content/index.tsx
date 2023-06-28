import { Button } from '../Buttons/Button'
import Image from 'next/image'
import {
  ContentContainer,
  ContentHeader,
  HeaderContent,
  HeaderTilesGrid,
  HeaderTilesTextContainer,
  HeaderTilesTitleText,
  HeaderTilesSubTitleText,
  ButtonContainer,
  TrailerContainer,
  LogoContainer,
} from './styles'

import diablo4Icon from '../../../public/banner-hero/icons/game-1.png'
import hearthstoneIcon from '../../../public/banner-hero/icons/game-2.png'
import wowIcon from '../../../public/banner-hero/icons/game-3.png'
import diabloIcon from '../../../public/banner-hero/icons/game-4.png'
import starcraftIcon from '../../../public/banner-hero/icons/game-5.png'

import diablo4Logo from '../../../public/banner-hero/games/diablo-logo.png'

export default function Content() {
  return (
    <ContentContainer>
      <ContentHeader>
        <HeaderContent>
          <HeaderTilesGrid>
            <Image src={diablo4Icon} alt="" />
            <Image src={hearthstoneIcon} alt="" />
            <Image src={wowIcon} alt="" />
            <Image src={diabloIcon} alt="" />
            <Image src={starcraftIcon} alt="" />
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
          <TrailerContainer>
            <LogoContainer>
              <Image src={diablo4Logo} alt="" />
            </LogoContainer>
            <div>
              Assista o Trailer
              <div>Trailer</div>
            </div>
          </TrailerContainer>
        </HeaderContent>
      </ContentHeader>
    </ContentContainer>
  )
}
