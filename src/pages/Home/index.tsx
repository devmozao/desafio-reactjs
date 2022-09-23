import { FormEvent } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { Container, Form } from './styles'

export default function Home() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <Container>
      <h1>Search Devs</h1>

      <Form onSubmit={handleSubmit}>
        <input placeholder="Type the username here..." />
        <button>
          <MagnifyingGlass size={24} />
          Buscar
        </button>
      </Form>
    </Container>
  )
}
