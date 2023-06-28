import Image from 'next/image'
import logoBlizzard from '../../../public/logo-blizzard.png'

import {
  HeaderContainer,
  HeaderHeader,
  HeaderContent,
  HeaderTabs,
  ButtonCreateAccount,
  ButtonLogin,
  ButtonText,
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
              <ButtonCreateAccount>
                <ButtonText>Criar conta</ButtonText>
              </ButtonCreateAccount>
              <ButtonLogin>
                <ButtonText>Logar</ButtonText>
              </ButtonLogin>
            </ButtonContainer>
          </HeaderContent>
        </HeaderHeader>
      </HeaderContainer>
    </BackgroundContainer>
  )
}
