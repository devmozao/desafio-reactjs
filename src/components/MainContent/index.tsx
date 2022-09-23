import { Container } from './styles'

interface MainContentProps {
  children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return <Container>{children}</Container>
}
