import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #3b4252;
    font-weight: 300;
    font-style: italic;
    line-height: 3rem;
  }
`

export const Form = styled.form`
  max-width: 520px;
  width: 100%;

  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;

    border: 1px solid #3b4252;
    border-radius: 0.5rem;
    color: #3b4252;
    height: 3.125rem;
    padding: 0.75rem 1.5rem;

    &::placeholder {
      font-weight: 400;
      font-style: italic;
    }
  }

  button {
    background-color: #47525e;
    border: none;
    border-radius: 0.5rem;
    color: white;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;

    transition: filter 0.1s ease-out;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
