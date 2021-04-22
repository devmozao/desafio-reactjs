import styled, {css} from 'styled-components'

export const Wrapper = styled.input`
  ${({theme})=>css`
    width:40rem;
    height:5rem;
    padding: ${theme.spacings.small};
    margin-right: ${theme.spacings.xxsmall};

    font-family: ${theme.font.family};
    color: ${theme.colors.black};
    font-style: italic;
    font-size: ${theme.font.sizes.large};

    border-color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    border-width: 0.1rem;

  `}
`
