import styled, { css } from "styled-components";

export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: 2.4rem;
    font-style: italic;
    line-height: 3.4rem;

    svg {
      width: 3.6rem;
      margin-right: 1.4rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `}
`;
