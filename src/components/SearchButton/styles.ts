import styled, {css} from 'styled-components'

export const Wrapper = styled.button`
  ${({theme})=>css`
    display: flex;
    align-items:center;
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.lightGray};
    background-color:${theme.colors.darkGray};

    padding: ${theme.spacings.xxsmall};

    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    font-size: 2.2rem;
    font-style: italic;

    width: 12rem;
    height: 5rem;

    svg {
      margin-right: 0.5rem;
      width: 3rem;
    }

    &&:hover{
      opacity: 95%;
      transition: opacity 200ms;
    }




  `}

`
