import styled, {css} from 'styled-components'

export const Wrapper = styled.input`
  ${({theme})=>css`
    width:40rem;
    height:5rem;
    padding: 2.3rem;

    font-family: ${theme.font.family};
    color: ${theme.colors.black};
    font-style: italic;
    font-size: 1.8rem;

    border-color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    border-width: 0.1rem;

  `}
`
