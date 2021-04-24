import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.xlarge};
    font-style: italic;
    line-height: 3.4rem;

    svg {
      width: 2.5rem;
    }

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
