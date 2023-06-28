import Image from 'next/image'
import logoBlizzard from '../../../public/logo-blizzard.png'
import { Button } from '../Buttons/Button'

import {
  HeaderContainer,
  HeaderHeader,
  HeaderContent,
  HeaderTabs,
  ButtonContainer,
  BackgroundContainer,
  BackgroundImage,
} from './styles'

export default function Header() {
  return (
    <BackgroundContainer>
      <BackgroundImage />
      <HeaderContainer>
        <HeaderHeader>
          <HeaderContent>
            <Image src={logoBlizzard} alt="Blizzard Logo" />
            <HeaderTabs>
              <span>Jogos</span>
              <span>Esportes</span>
              <span>Loja</span>
              <span>Noticias</span>
              <span>Suporte</span>
            </HeaderTabs>

            <ButtonContainer>
              <Button size={'small'} variant={'outline'}>
                Criar Conta
              </Button>
              <Button size={'small'} variant={'primary'}>
                Logar
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </HeaderHeader>
      </HeaderContainer>
    </BackgroundContainer>
  )
}
