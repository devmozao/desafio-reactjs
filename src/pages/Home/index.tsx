import { FormEvent, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { Container, Form, FormGroup, Input } from './styles'

export default function Home() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

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

    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.status === 404) {
          setError('Usuário não encontrado!')
          return
        }

        return response.json()
      })
      .then(data => console.log(data))
      .catch(error => setError('Ops! erro ao buscar.'))
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
