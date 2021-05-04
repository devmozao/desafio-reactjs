import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;

    color: ${theme.colors.secondaryGray};

    h1 {
      font-size: calc(${theme.font.sizes.large}*2);
      margin: ${theme.spacings.medium};
      text-align: center;
    }

    svg {
      width: calc(${theme.font.sizes.large}*3);
    }

    a {
      text-decoration: none;
    }
  `}
`;
