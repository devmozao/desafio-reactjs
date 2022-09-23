import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    line-height: 3rem;
    font-weight: 300;
    font-style: italic;
    color: #3b4252;
  }
`

export const Form = styled.form`
  max-width: 520px;
  width: 100%;
  display: flex;

  input {
    flex: 1;
    height: 3.125rem;
    margin-right: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #3b4252;
    color: #3b4252;

    &::placeholder {
      font-weight: 400;
      font-style: italic;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    gap: 0.625rem;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #47525e;
    color: white;
    transition: filter 0.1s ease-out;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    input {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }
`
