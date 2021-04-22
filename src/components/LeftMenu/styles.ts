import styled, {css} from 'styled-components'

export const Wrapper = styled.main`
  ${({theme})=>css`
    height: 100%;
    width: 40rem;
    background-color: ${theme.colors.darkGray};
  `}
`
