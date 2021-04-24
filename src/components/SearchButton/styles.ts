import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.lightGray};
    background-color: ${theme.colors.darkGray};

    padding: ${theme.spacings.xxsmall};

    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xlarge};
    font-style: italic;
    width: 12rem;

    height: 5rem;

    svg {
      margin-right: ${theme.spacings.xxsmall};
      width: 3rem;
    }

    &&:hover {
      opacity: 95%;
      transition: opacity 200ms;
    }

    ${media.lessThan("medium")`
    margin-top: 1rem;
    `}
  `}
`;
