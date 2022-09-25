import { Star } from 'phosphor-react'

import { Container, Title, RepoInfo } from './styles'

export default function RepoCard() {
  return (
    <Container>
      <Title to="/">Repository Name</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
        congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
        feugiat.
      </p>

      <RepoInfo>
        <span>
          <Star size={20} />
          100 stars
        </span>
        •<span>Updated 30 days ago</span>
      </RepoInfo>
    </Container>
  )
}
