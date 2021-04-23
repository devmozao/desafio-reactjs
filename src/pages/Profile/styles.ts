import styled,{css} from 'styled-components'

export const Wrapper = styled.main`

  ${({theme})=>css`
      min-height: 100vh;
      display: flex;
  `}

`

export const RepositoryList = styled.ul`
${({theme})=>css`
  list-style: none;
  width: 100%;
  padding: 3rem 12rem 3rem 7rem;

  li:nth-child( n + 2 ) {
    border-top:0.1rem solid ${theme.colors.lightGray};
    padding-top: 1.4rem;
    margin-top: 1.4rem;
  }
`}`

