import { FormEvent, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { Container, Form, FormGroup, Input } from './styles'

export default function Home() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function changeUsername(text: string) {
    setUsername(text)
    setError('')
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!username) {
      setError('Informe um nome de usuário para buscar!')
      return
    }

    navigate(`/perfil/${username}`)
  }

  return (
    <Container>
      <h1>Search Devs</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            error={error !== ''}
            value={username}
            onChange={e => changeUsername(e.target.value)}
            placeholder="Type the username here..."
            aria-label="username"
          />
          {error && <span>{error}</span>}
        </FormGroup>

        <button>
          <MagnifyingGlass size={24} />
          Buscar
        </button>
      </Form>
    </Container>
  )
}
