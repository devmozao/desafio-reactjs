import * as S from './styles'

export type DevLinkProps = {
  children: React.ReactNode
  icon: JSX.Element
  href?: string
}
const DevLink = ({children,href="#",icon}:DevLinkProps) => (
  <S.Wrapper>
    {icon} <a href={href} target="_blank" rel="noReferrer">{children}</a>
  </S.Wrapper>
)

export default DevLink
