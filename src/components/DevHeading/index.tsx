import * as S from './styles'

export type DevHeadingProps = {
  children: React.ReactNode
  icon: JSX.Element
}
const DevHeading = ({children,icon}:DevHeadingProps) => (
  <S.Wrapper>
    {icon} <span>{children}</span>
  </S.Wrapper>
)

export default DevHeading
