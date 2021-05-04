import styled, { css } from "styled-components";


export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.small};
    font-style: italic;
    line-height: 3.4rem;

    svg {
      width: ${theme.font.sizes.small};
      margin-right: ${theme.spacings.xxsmall};
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `}
`;
