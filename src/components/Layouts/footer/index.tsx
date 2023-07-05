import { Button } from '../../Buttons/Button'
import {
  FooterContainer,
  FooterContent,
  FooterHeader,
  FooterDownloadTextContainer,
  FooterDownloadText,
  BackgroundGrid,
  BackgroundInside,
  FooterDownloadTextContainerIcon,
  FooterMobileApplicationContainer,
  FooterMobileApplicationText,
  ButtonContainer,
  FooterTitle,
  Teste,
} from './style'

import Image from 'next/image'
import logoBattleNet from '../../../../public/logo-battle-net.png'
import appImage from '../../../../public/ilustrations/app.png'
import appImageMini from '../../../../public/ilustrations/app-mini.png'

import dotsWrapper from '../../../../public/dots-wrapper.svg'
import buyIcon from '../../../../public/buyIcon.svg'
import filesIcon from '../../../../public/filesIcon.svg'
import cellphoneIcon from '../../../../public/cellphoneIcon.svg'

import applelogo from '../../../assets/thirdPartyIcons/icons8-apple.svg'

export default function Footer() {
  return (
    <FooterContainer css={{ backgroundImage: 'url(/footer-background.png)' }}>
      <FooterHeader>
        <FooterContent>
          <Image src={logoBattleNet} alt="" />
          <FooterTitle>Baixe agora o battle.net</FooterTitle>
          <FooterDownloadTextContainer>
            <FooterDownloadTextContainerIcon>
              <Image src={filesIcon} alt="" />
              <FooterDownloadText>Seus jogos em um só lugar</FooterDownloadText>
            </FooterDownloadTextContainerIcon>
            <FooterDownloadTextContainerIcon>
              <Image src={dotsWrapper} alt="" />
              <FooterDownloadText>
                Conecte-se aos seus amigos
              </FooterDownloadText>
            </FooterDownloadTextContainerIcon>
            <FooterDownloadTextContainerIcon>
              <Image src={buyIcon} alt="" />
              <FooterDownloadText>
                Compre jogos e itens digitais
              </FooterDownloadText>
            </FooterDownloadTextContainerIcon>
          </FooterDownloadTextContainer>
          <ButtonContainer>
            <Button variant={'primary'} size={'full'} weight={'bold'}>
              <Image src={applelogo} alt="" />
              Baixar para o MacOS
            </Button>
          </ButtonContainer>
          <FooterMobileApplicationContainer>
            <Image src={cellphoneIcon} alt="" />
            <FooterMobileApplicationText>
              Também disponível como <u> aplicativo móvel </u>
            </FooterMobileApplicationText>
          </FooterMobileApplicationContainer>
        </FooterContent>
        <Teste>
          <BackgroundGrid>
            <Image src={appImage} alt="" />
          </BackgroundGrid>
          <BackgroundInside>
            <Image src={appImageMini} alt="" />
          </BackgroundInside>
        </Teste>
      </FooterHeader>
    </FooterContainer>
  )
}
