import styled from 'styled-components'

export const Container = styled.main`
  padding: 1.5rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #3b4252;
    border-radius: 5px;
  }
`
