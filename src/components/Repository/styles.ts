import styled, { css } from "styled-components";

export const Wrapper = styled.li``;
export const Name = styled.a`
  ${({ theme }) => css`
    text-decoration:none;
    font-size: 2.4rem;
    color: ${theme.colors.darkGray};
    line-height: 3.4rem;
    font-style: italic;
  `}
`;
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.darkGray};
    line-height: 2.8rem;
    margin-top: 0.4rem;
  `}
`;
export const Numbers = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: ${theme.colors.gray};
    font-style: italic;

    margin-top: 1rem;
    svg{
      width: 3rem;
      margin: 0.4rem;
    }

  `}
`;
