/* react/next imports */
import { useRouter } from 'next/router'
import { useState } from 'react'

/* logos section */
import { BattlenetLogo } from '@/components/Icons/BattlenetLogo'
import { GoogleIcon } from '@/components/Icons/ThirdPartyIcons/GoogleIcon'
import { FacebookIcon } from '@/components/Icons/ThirdPartyIcons/FacebookIcon'
import { AppleIcon } from '@/components/Icons/ThirdPartyIcons/AppleIcon'
import { PlaystationIcon } from '@/components/Icons/ThirdPartyIcons/PlaystationIcon'
import { XboxIcon } from '@/components/Icons/ThirdPartyIcons/XboxIcon'
import { NintendoIcon } from '@/components/Icons/ThirdPartyIcons/NintendoIcon'

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
    router.push('/')
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevValue) => !prevValue)
  }

  return (
    <LoginContainer>
      <LoginHeader>
        <ImageContainer>
          <BattlenetLogo width={'240px'} height={'40px'} />
        </ImageContainer>

        <TitleText> Conectar-se </TitleText>

        <GridBoxes>
          <ThirdPartyPlatformLogin
            displayColor="$white"
            icon={
              <ThirdPartyPlatformIcons
                icon={<GoogleIcon width={'20px'} height={'20px'} />}
              />
            }
          />
          <ThirdPartyPlatformLogin
            displayColor="$blue-500"
            icon={
              <ThirdPartyPlatformIcons
                icon={
                  <FacebookIcon
                    width={'20px'}
                    height={'20px'}
                    color={'white'}
                  />
                }
              />
            }
          />
          <ThirdPartyPlatformLogin
            displayColor="$white"
            icon={
              <ThirdPartyPlatformIcons
                icon={<AppleIcon width={'20px'} height={'20px'} />}
              />
            }
          />
          <ThirdPartyPlatformLogin
            displayColor="$green-700"
            icon={
              <ThirdPartyPlatformIcons
                icon={
                  <XboxIcon width={'18px'} height={'18px'} color={'white'} />
                }
              />
            }
          />
          <ThirdPartyPlatformLogin
            displayColor="$blue-400"
            icon={
              <ThirdPartyPlatformIcons
                icon={
                  <PlaystationIcon
                    width={'24px'}
                    height={'24px'}
                    color={'white'}
                  />
                }
              />
            }
          />
          <ThirdPartyPlatformLogin
            displayColor="$red"
            icon={
              <ThirdPartyPlatformIcons
                icon={
                  <NintendoIcon
                    width={'20px'}
                    height={'20px'}
                    color={'white'}
                  />
                }
              />
            }
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
