import styled, { css } from "styled-components";

export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: 2rem;
    font-style: italic;
    line-height: 3.4rem;

    svg {
      width: 2.5rem;

    }
  `}
`;
