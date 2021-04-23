import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 45rem;
    background-color: ${theme.colors.darkGray};

    padding: ${theme.spacings.small};
  `}
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 30rem;
    margin-top: 6rem;
    align-self: center;
  `}
`;

export const DevInfo = styled.div`
  ${({ theme }) => css`
    margin-top: 3.3rem;
  `}
`;

export const DevBio = styled.p`
  ${({ theme }) => css`
    margin-top: 2.3rem;
    color: ${theme.colors.gray};
    font-size: 1.8rem;
    line-height: 2.8rem;

  `}
`;

export const DevNumbers = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    display:flex;
    justify-content: space-between;

    margin-top: 2.3rem;

  `}
`;

export const DevLinks = styled.ul`
 ${({ theme }) => css`
    list-style: none;

    display:flex;
    flex-direction:column;

    margin-top: 3.8rem;

    li {
      margin-bottom: 1.7rem;
    }

  `}`

  export const BackButton = styled.button`
  ${({theme})=>css`
      height: 5rem;
      width: 19rem;
      background-color: ${theme.colors.lightGray};
      border: none;
      border-radius: ${theme.border.radius};
      align-self: center;
      padding: 1.2rem;
      font-size: 1.8rem;
      font-style:italic;
      margin-top: 6rem;
      margin-bottom: 4rem;

      &&:hover{
      opacity: 95%;
      transition: opacity 200ms;
    }
  `}
  `


