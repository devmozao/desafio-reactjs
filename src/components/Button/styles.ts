import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";
import { ButtonProps } from ".";

const wrapperModifiers = {
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.lightGray};
    background-color: ${theme.colors.secondaryGray};
  `,
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkGray};
    background-color: ${theme.colors.lightGray};
  `,
  normal: (theme: DefaultTheme) => css`
    width: 12rem;
    height: 5rem;
    font-size: ${theme.font.sizes.xlarge};
  `,
  small: (theme: DefaultTheme) => css`
    width: 16rem;
    height: 4rem;
    font-size: ${theme.font.sizes.small};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, color, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    font-style: italic;

    cursor: pointer;

    ${!!color && wrapperModifiers[color](theme)}
    ${!!size && wrapperModifiers[size](theme)}

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
