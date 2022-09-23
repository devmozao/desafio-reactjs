import styled from 'styled-components'

interface InputProps {
  error: boolean
}

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
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const Form = styled.form`
  max-width: 520px;
  width: 100%;

  display: flex;
  gap: 0.5rem;

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

export const FormGroup = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    color: red;
    font-size: 16px;
  }
`

export const Input = styled.input<InputProps>`
  border: 1px solid ${props => (props.error ? 'red' : '#3b4252')};
  border-radius: 0.5rem;
  color: #3b4252;
  height: 3.125rem;
  padding: 0.75rem 1.5rem;

  &::placeholder {
    font-weight: 400;
    font-style: italic;
  }
`
