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
    font-size: 2.4rem;
    font-style: italic;

    width: 12rem;
    height: 5rem;

    span {
      margin-left: ${theme.spacings.xxsmall};
    }

    &&:hover{
      opacity: 95%;
      transition: opacity 200ms;
    }




  `}

`
