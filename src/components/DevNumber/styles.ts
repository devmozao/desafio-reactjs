import styled, {css} from 'styled-components'

export const Wrapper = styled.li`
  ${({theme})=>css`
      display: flex;
      align-items: center;
      color: ${theme.colors.lightGray};
      font-size: 2rem;
      font-style:italic;

      svg {
        width: 2rem;
        margin-right: 0.3rem;
      }
  `}
`
