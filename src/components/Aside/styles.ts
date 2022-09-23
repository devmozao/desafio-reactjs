import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.aside`
  background-color: #3b4252;
  color: #eceff4;
  grid-area: AS;
  padding: 1.5rem;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #8190a577;
    border-radius: 5px;
  }

  display: flex;
  flex-direction: column;
  overflow-y: auto;

  img {
    border-radius: 0.25rem;
    max-width: 290px;
    width: 100%;
    margin-top: 1rem;
    align-self: center;
  }
`

export const FullName = styled.h1`
  font-weight: 300;
  font-style: italic;
  font-size: 2rem;
  margin-top: 2rem;
`

export const Username = styled.span`
  font-weight: 300;
  font-size: 1.25rem;
`

export const Bio = styled.p`
  color: #8190a5;
  margin-top: 2rem;
  line-height: 1.5rem;
`

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  span {
    font-weight: 300;
    font-style: italic;
    display: flex;
    align-items: center;
  }
`

export const Details = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.125rem;
  }
`

export const GoBack = styled(Link)`
  align-self: center;
  background-color: #eceff4;
  border-radius: 0.5rem;
  color: #3b4252;
  min-height: 3.125rem;
  width: 128px;
  margin-top: 2rem;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.1s ease-out;

  &:hover {
    filter: brightness(0.8);
  }
`
