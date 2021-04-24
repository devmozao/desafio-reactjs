import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    display: flex;

    ${media.lessThan("medium")`
        flex-direction:column;
        align-items:center;
      `}
  `}
`;

export const RepositoryList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    width: 100%;
    padding: 3rem 12rem 3rem 7rem;

    li:nth-child(n + 2) {
      border-top: 0.1rem solid ${theme.colors.lightGray};
      padding-top: ${theme.spacings.xsmall};
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.lessThan("medium")`
        padding: ${theme.spacings.small};
        width: 100%;
    `}
  `}
`;
