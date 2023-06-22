import Image from 'next/image'
import logoBattleNet from '../../assets/logo-horizontal-color-light.1z1fI.svg'
import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoApple,
  IoLogoPlaystation,
  IoLogoXbox,
} from 'react-icons/io'

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
  LineText,
  SeparatorLineText,
  LineConnectText,
} from './login.styles'
import { LoginBoxes } from '@/components/LoginBoxes'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/index')
  }
  return (
    <LoginContainer>
      <LoginHeader>
        <ImageContainer>
          <Image src={logoBattleNet} alt="" />
        </ImageContainer>

        <TitleText> Conectar-se </TitleText>

        <GridBoxes>
          <LoginBoxes
            displayColor="$blue-300"
            icon={<IoLogoFacebook size={20} />}
          />
          <LoginBoxes displayColor="$white" icon={<IoLogoGoogle size={20} />} />
          <LoginBoxes
            displayColor="$white"
            icon={<IoLogoApple size={24} color="black" />}
          />
          <LoginBoxes
            displayColor="$blue-400"
            icon={<IoLogoPlaystation size={20} />}
          />
          <LoginBoxes
            displayColor="$green-700"
            icon={<IoLogoXbox size={20} />}
          />
          <LoginBoxes displayColor="red" icon="" />
        </GridBoxes>

        <LineText>
          <SeparatorLineText />
          <LineConnectText> Ou conecte-se com </LineConnectText>
          <SeparatorLineText />
        </LineText>

        <InputContainer>
          <InputLogin placeholder="Email ou telefone" />
        </InputContainer>
        <InputContainer>
          <InputLogin placeholder="Senha" />
        </InputContainer>

        <ButtonLogin>
          <ButtonText onClick={handleClick}> Conectar-se </ButtonText>
        </ButtonLogin>

        <TextAccountContainer>
          <TextAccount> Crie uma Conta Battle.net de graça </TextAccount>
          <TextAccount> Não consegue logar? </TextAccount>
        </TextAccountContainer>
      </LoginHeader>
    </LoginContainer>
  )
}
