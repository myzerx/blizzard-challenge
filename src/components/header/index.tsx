import Image from 'next/image'
import logoBlizzard from '../../assets/logo-blizzard.png'
import {
  HeaderContainer,
  HeaderHeader,
  HeaderContent,
  HeaderTabs,
  ButtonCreateAccount,
  ButtonLogin,
  ButtonText,
  ButtonContainer,
} from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderHeader>
        <HeaderContent>
          <Image src={logoBlizzard} alt="" />
          <HeaderTabs>
            <span> Jogos </span>
            <span> Esportes </span>
            <span> Loja </span>
            <span> Noticias </span>
            <span> Suporte </span>
          </HeaderTabs>
          <ButtonContainer>
            <ButtonCreateAccount>
              <ButtonText> Criar conta</ButtonText>
            </ButtonCreateAccount>
            <ButtonLogin>
              <ButtonText> Logar</ButtonText>
            </ButtonLogin>
          </ButtonContainer>
        </HeaderContent>
      </HeaderHeader>
    </HeaderContainer>
  )
}
