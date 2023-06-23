/* react/next imports */
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'

/* logos section */
import logoBattleNet from '../../assets/logo-horizontal-color-light.1z1fI.svg'
import facebooklogo from '../../assets/thirdPartyIcons/icons8-facebook.svg'
import googlelogo from '../../assets/thirdPartyIcons/icons8-google-20.svg'
import applelogo from '../../assets/thirdPartyIcons/icons8-apple.svg'
import playstationlogo from '../../assets/thirdPartyIcons/icons8-playstation.svg'
import xboxlogo from '../../assets/thirdPartyIcons/icons8-xbox.svg'
import nintendologo from '../../assets/thirdPartyIcons/nintendo-switch.svg'

/* components imports */
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
  EyeIcon,
  EyeSlashIcon,
} from './login.styles'

import { ThirdPartyPlatformLogin } from '@/components/ThirdPartyPlatform/login'
import { ThirdPartyPlatformIcons } from '@/components/ThirdPartyPlatform/icons'

export default function Login() {
  const router = useRouter()
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleClick = () => {
    router.push('/index')
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevValue) => !prevValue)
  }

  return (
    <LoginContainer>
      <LoginHeader>
        <ImageContainer>
          <Image src={logoBattleNet} alt="" />
        </ImageContainer>

        <TitleText> Conectar-se </TitleText>

        <GridBoxes>
          <ThirdPartyPlatformLogin
            displayColor="$blue-300"
            icon={<ThirdPartyPlatformIcons icon={facebooklogo} />}
          />
          <ThirdPartyPlatformLogin
            displayColor="$white"
            icon={<ThirdPartyPlatformIcons icon={googlelogo} />}
          />
          <ThirdPartyPlatformLogin
            displayColor="$white"
            icon={<ThirdPartyPlatformIcons icon={applelogo} />}
          />
          <ThirdPartyPlatformLogin
            displayColor="$blue-400"
            icon={<ThirdPartyPlatformIcons icon={playstationlogo} />}
          />
          <ThirdPartyPlatformLogin
            displayColor="$green-700"
            icon={<ThirdPartyPlatformIcons icon={xboxlogo} />}
          />

          <ThirdPartyPlatformLogin
            displayColor="$red"
            icon={<ThirdPartyPlatformIcons icon={nintendologo} />}
          />
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
          <InputLogin
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Senha"
          />
          {passwordVisible ? (
            <EyeSlashIcon size={18} onClick={togglePasswordVisibility} />
          ) : (
            <EyeIcon size={18} onClick={togglePasswordVisibility} />
          )}
        </InputContainer>

        <ButtonLogin onClick={handleClick}>
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
