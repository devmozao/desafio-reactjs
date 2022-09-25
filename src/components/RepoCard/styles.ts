import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  color: #3b4252;
  max-width: 900px;
  width: 100%;

  p {
    line-height: 1.5rem;
    font-size: 1.125rem;
    margin-top: 0.5rem;
  }
`

export const Title = styled(Link)`
  color: #3b4252;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  text-decoration: none;
`

export const RepoInfo = styled.div`
  color: #8190a5;
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  span {
    display: flex;
    align-items: center;
  }
`
