import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.input`
  ${({theme})=>css`
    width:40rem;
    height:5rem;
    padding: ${theme.spacings.small};

    font-family: ${theme.font.family};
    color: ${theme.colors.darkGray};
    font-style: italic;
    font-size: ${theme.font.sizes.large};

    border-color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    border-width: 0.1rem;

    ${media.lessThan("medium")`
      width: 100%;
      max-width: 40rem;
    `}

  `}
`
