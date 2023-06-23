import {
  ApplicationLayoutContainer,
  ApplicationLayoutHead,
  ApplicationLayoutHeader,
  ApplicationLayoutHeaderContent,
} from './login.styles'

export default function Index() {
  return (
    <ApplicationLayoutContainer>
      <ApplicationLayoutHead>
        <ApplicationLayoutHeader>
          <ApplicationLayoutHeaderContent>Logo</ApplicationLayoutHeaderContent>
        </ApplicationLayoutHeader>
      </ApplicationLayoutHead>
    </ApplicationLayoutContainer>
  )
}
