import * as S from './styles'

export type DevNameProps = {
  children: React.ReactNode
  isLogin?: boolean
}

const DevName = ({children,isLogin = false}:DevNameProps) => (
  <S.Wrapper isLogin={isLogin}>
    {children}
  </S.Wrapper>
)

export default DevName
