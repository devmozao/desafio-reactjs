import styled, {css} from 'styled-components'
import { DevNameProps } from '.'

const wrapperModifers = {
  login: ()=>css`
  font-size: 2.8rem;
  line-height: 3.4rem;
  `
}

export const Wrapper = styled.h2<DevNameProps>`
  ${({theme, isLogin})=>css`
    font-family:${theme.font.family};
    font-weight:${theme.font.light};
    font-size: 4rem;
    color:${theme.colors.lightGray};

    font-style:italic;

    line-height: 5rem;

    ${!!isLogin && wrapperModifers.login()}
  `}
`
