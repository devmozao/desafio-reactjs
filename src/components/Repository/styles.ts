import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.li`
  ${media.lessThan('medium')`
    width: 100%;
  `}
`;
export const Name = styled.a`
  ${({ theme }) => css`
    text-decoration:none;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.darkGray};
    line-height: 3.4rem;
    font-style: italic;

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    line-height: 2.8rem;
    margin-top: ${theme.spacings.xxsmall};

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;
export const Numbers = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    font-style: italic;
    margin-top: ${theme.spacings.xsmall};

    svg{
      width: 2rem;
      margin: ${theme.spacings.xxsmall};
    }

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.medium};
    `}

  `}
`;
