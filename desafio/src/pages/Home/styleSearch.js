import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    color: #3B4252;
    font-size: 40px;
    font-style: italic;
    margin: 0;
    line-height: 50px;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: center;
    input{
        width: 400px;
        height: 50px;
        font-size: 1em;
        color: #3B4252;
        padding: 0px 15px;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #3B4252;
        border-radius: 5px;

        ::placeholder{
            font-size: 1em;
            font-style: italic;
            color: #8190A5;
        }
    }

    button{
        width: 118px;
        height: 50px;
        background: #47525E;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-size: 20px;
        font-style: italic;
        color: #ECEFF4;
        transition: 0.3s;
        &:disabled{
            background: #1d1d1d;
            cursor: not-allowed;
        }
    }
`;