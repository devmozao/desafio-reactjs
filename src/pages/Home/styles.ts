import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    min-height: 100vh;
  `}
`;

export const SearchItems = styled.form`
  display: flex;

  ${media.lessThan("medium")`
  flex-direction: column;
  align-items: center;
  `}
`;

export const Error = styled.h2`
  ${({theme})=>css`
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.gray};
  `}
`
