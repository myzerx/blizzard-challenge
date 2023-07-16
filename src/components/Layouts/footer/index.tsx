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

import { useEffect, useState } from 'react'
import { BuyIcon } from '@/components/Icons/footer/BuyIcon'
import { FilesIcon } from '@/components/Icons/footer/filesIcon'
import { DotsWrapper } from '@/components/Icons/footer/DotsWrapper'
import { CellphoneIcon } from '@/components/Icons/footer/CellphoneIcon'
import { AppleIcon } from '@/components/Icons/ThirdPartyIcons/AppleIcon'
import { WindowsIcon } from '@/components/Icons/ThirdPartyIcons/WindowsIcon'
import { LinuxIcon } from '@/components/Icons/ThirdPartyIcons/LinuxIcon'

export default function Footer() {
  const [os, setOs] = useState('')

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    if (userAgent.includes('Windows')) setOs('Windows')
    else if (userAgent.includes('Mac')) setOs('Mac')
    else if (userAgent.includes('Linux')) setOs('Linux')
    else setOs('Unknown')
  }, [])

  const getButtonContent = () => {
    switch (os) {
      case 'Windows':
        return {
          message: 'Baixar para Windows',
          icon: <WindowsIcon width={'20px'} height={'20px'} color={'white'} />,
        }
      case 'Mac':
        return {
          message: 'Baixar para MacOS',
          icon: <AppleIcon width={'20px'} height={'20px'} color={'white'} />,
        }
      case 'Linux':
        return {
          message: 'Baixar para Linux',
          icon: <LinuxIcon width={'30px'} height={'30px'} color={'white'} />,
        }
      default:
        return {
          message: 'OS Desconhecido',
          icon: 'unknown-icon',
        }
    }
  }

  const { message, icon } = getButtonContent()

  return (
    <FooterContainer css={{ backgroundImage: 'url(/footer-background.png)' }}>
      <FooterHeader>
        <FooterContent>
          <Image src={logoBattleNet} alt="" />
          <FooterTitle>Baixe agora o battle.net</FooterTitle>
          <FooterDownloadTextContainer>
            <FooterDownloadTextContainerIcon>
              <FilesIcon width={'20px'} height={'20px'} color={'#00AEFF'} />
              <FooterDownloadText>Seus jogos em um só lugar</FooterDownloadText>
            </FooterDownloadTextContainerIcon>
            <FooterDownloadTextContainerIcon>
              <DotsWrapper width={'20px'} height={'20px'} color={'#00AEFF'} />
              <FooterDownloadText>
                Conecte-se aos seus amigos
              </FooterDownloadText>
            </FooterDownloadTextContainerIcon>
            <FooterDownloadTextContainerIcon>
              <BuyIcon width={'20px'} height={'20px'} color={'#00AEFF'} />
              <FooterDownloadText>
                Compre jogos e itens digitais
              </FooterDownloadText>
            </FooterDownloadTextContainerIcon>
          </FooterDownloadTextContainer>
          <ButtonContainer>
            <Button variant={'primary'} size={'full'} weight={'bold'}>
              {icon}
              {message}
            </Button>
          </ButtonContainer>
          <FooterMobileApplicationContainer>
            <CellphoneIcon width={'20px'} height={'20px'} color={'white'} />
            <FooterMobileApplicationText>
              Também disponível como <u> aplicativo móvel </u>
            </FooterMobileApplicationText>
          </FooterMobileApplicationContainer>
        </FooterContent>
        {/* <Teste>
          <BackgroundGrid>
            <Image src={appImage} alt="" />
          </BackgroundGrid>
          <BackgroundInside>
            <Image src={appImageMini} alt="" />
          </BackgroundInside>
        </Teste> */}
      </FooterHeader>
    </FooterContainer>
  )
}
