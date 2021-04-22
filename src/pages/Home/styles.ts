import styled,{css} from 'styled-components'

export const Wrapper = styled.main`

  ${({theme})=>css`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    height: 100vh;



  `}

`

export const SearchItems = styled.div`
  display: flex;
`
