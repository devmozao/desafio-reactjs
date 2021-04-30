import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 45rem;
    background-color: ${theme.colors.darkGray};

    padding: ${theme.spacings.small};

    ${media.lessThan("medium")`
      width:100%;
      min-width: 0rem;
    `}
  `}
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 30rem;
    margin-top: ${theme.spacings.xxlarge};
    align-self: center;

    ${media.lessThan("medium")`
      margin-top: ${theme.spacings.medium};
    `}
  `}
`;

export const DevInfo = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const DevBio = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    line-height: 2.8rem;

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

export const DevNumbers = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    display: flex;
    justify-content: space-between;

    margin-top: ${theme.spacings.small};

    ${media.lessThan("medium")`

    `}
  `}
`;

export const DevLinks = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    display: flex;
    flex-direction: column;

    margin-top: ${theme.spacings.large};

    li {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const BackSection = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.large};
    align-self: center;
  `}
`;

export const BackButton = styled.button`
  ${({ theme }) => css`
    height: 5rem;
    width: 19rem;
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.darkGray};
    border: none;
    border-radius: ${theme.border.radius};
    padding: 1.2rem;
    font-size: ${theme.font.sizes.large};
    font-style: italic;

    &&:hover {
      opacity: 80%;
      transition: opacity 200ms;
    }

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;
