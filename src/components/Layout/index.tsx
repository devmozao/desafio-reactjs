import Aside from '../Aside'
import MainContent from '../MainContent'
import { Container } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Aside />
      <MainContent>{children}</MainContent>
    </Container>
  )
}
