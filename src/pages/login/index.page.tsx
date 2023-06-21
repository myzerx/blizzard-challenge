import { LoginBoxes } from '@/components/LoginBoxes'
import Image from 'next/image'
import {
  LoginContainer,
  LoginHeader,
  ImageContainer,
  InputLogin,
  InputContainer,
  ButtonLogin,
  ButtonText,
  TitleText,
  GridBoxes,
  TextAccountContainer,
  TextAccount,
} from './login.styles'

import logoBattleNet from '../../assets/logo-horizontal-color-light.1z1fI.svg'

export default function Login() {
  return (
    <LoginContainer>
      <LoginHeader>
        <ImageContainer>
          <Image src={logoBattleNet} alt="" />
        </ImageContainer>

        <TitleText> Conectar-se </TitleText>

        <GridBoxes>
          <LoginBoxes data={{ displayColor: '$blue-400', displayIcon: 'fb' }} />
          <LoginBoxes data={{ displayColor: '$white', displayIcon: 'gcp' }} />
          <LoginBoxes data={{ displayColor: '$white', displayIcon: 'apple' }} />
          <LoginBoxes data={{ displayColor: '$blue-600', displayIcon: 'ps' }} />
          <LoginBoxes
            data={{ displayColor: '$green-700', displayIcon: 'xb' }}
          />
          <LoginBoxes data={{ displayColor: 'red', displayIcon: 'nintend' }} />
        </GridBoxes>

        <span> Ou se conecte-se com </span>

        <InputContainer>
          <InputLogin placeholder="Email ou telefone" />
        </InputContainer>
        <InputContainer>
          <InputLogin placeholder="Senha" />
        </InputContainer>

        <ButtonLogin>
          <ButtonText> Conectar-se </ButtonText>
        </ButtonLogin>

        <TextAccountContainer>
          <TextAccount> Crie uma Conta Battle.net de graça </TextAccount>
          <TextAccount> Não consegue logar? </TextAccount>
        </TextAccountContainer>
      </LoginHeader>
    </LoginContainer>
  )
}
