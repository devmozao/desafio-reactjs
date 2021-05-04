import styled, {css, DefaultTheme} from 'styled-components'
import media from 'styled-media-query'
import { DevNameProps } from '.'

const wrapperModifers = {
  login: (theme:DefaultTheme)=>css`
  font-size: ${theme.font.sizes.large};

  ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `
}

export const Wrapper = styled.h2<DevNameProps>`
  ${({theme, isLogin})=>css`
    font-family:${theme.font.family};
    font-weight:${theme.font.light};
    font-size: ${theme.font.sizes.xxlarge};
    color:${theme.colors.lightGray};

    font-style:italic;

    ${!!isLogin && wrapperModifers.login(theme)}

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
