import { Button } from '@/components/Buttons/Button'
import {
  ErrorLayoutErrorText,
  ErrorLayoutContainer,
  ErrorLayoutContentContainer,
  ErrorLayoutContent,
  ErrorLayoutErrorContainer,
  ErrorPageImageContainer,
  ErrorPageSubtitle,
  ErrorLayoutTextContainer,
  ErrorPageTitle,
} from './styles'
import { useRouter } from 'next/router'

export function ErrorLayout() {
  const router = useRouter()
  const handleClickGoHome = () => {
    router.push('/')
  }

  return (
    <ErrorLayoutContainer>
      <ErrorLayoutContentContainer>
        <ErrorLayoutContent>
          <ErrorLayoutErrorContainer>
            <ErrorLayoutErrorText> Erro 404 </ErrorLayoutErrorText>
          </ErrorLayoutErrorContainer>

          <ErrorLayoutTextContainer>
            <ErrorPageTitle>Página não encontrada.</ErrorPageTitle>

            <ErrorPageSubtitle>
              Talvez a página que você esteja acessando não exista. Que tal
              voltarmos para a página inicial?
            </ErrorPageSubtitle>
          </ErrorLayoutTextContainer>

          <Button size={'full'} onClick={handleClickGoHome}>
            Voltar
          </Button>
        </ErrorLayoutContent>
      </ErrorLayoutContentContainer>

      <ErrorPageImageContainer />
    </ErrorLayoutContainer>
  )
}
