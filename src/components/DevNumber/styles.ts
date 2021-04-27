import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.li`
  ${({theme})=>css`
      display: flex;
      align-items: center;
      color: ${theme.colors.lightGray};
      font-size: ${theme.font.sizes.xlarge};
      font-style:italic;


      svg {
        width: 2.5rem;
        margin: ${theme.spacings.xxsmall};
      }

      span {
        margin: ${theme.spacings.xxsmall};
      }

      ${media.lessThan("medium")`
        font-size: ${theme.font.sizes.medium};
      `}
  `}
`
