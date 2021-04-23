import * as S from './styles'

export type DevNumberProps = {
  children: React.ReactNode
  icon: JSX.Element
}
const DevNumber = ({children,icon}:DevNumberProps) => (
  <S.Wrapper>
    {icon}<span>{children}</span>
  </S.Wrapper>
)

export default DevNumber
