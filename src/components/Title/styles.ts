import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    font-size: 6rem;
    letter-spacing: -0.3rem;
    color: ${theme.colors.darkGray};
    font-style: italic;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
