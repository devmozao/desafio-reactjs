import {
  UsersThree,
  Heart,
  Star,
  Buildings,
  MapPin,
  EnvelopeSimple,
  Link,
  TwitterLogo,
} from 'phosphor-react'

import {
  Container,
  FullName,
  Username,
  Bio,
  Status,
  GoBack,
  Details,
} from './styles'

export default function Aside() {
  return (
    <Container>
      <img src="https://github.com/calebesg.png" alt="calebesg" />

      <FullName>Developer's full name</FullName>
      <Username>@username</Username>

      <Bio>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
        congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
        feugiat.
      </Bio>

      <Status>
        <span>
          <UsersThree size={20} />
          200 followers
        </span>
        <span>
          <Heart size={20} />
          130 following
        </span>
        <span>
          <Star size={20} />
          100 stars
        </span>
      </Status>

      <Details>
        <span>
          <Buildings size={24} />
          Organization
        </span>
        <span>
          <MapPin size={24} />
          Location
        </span>
        <span>
          <EnvelopeSimple size={24} />
          Email
        </span>
        <span>
          <Link size={24} />
          www.mywebsite.com
        </span>
        <span>
          <TwitterLogo size={24} />
          @myTwitter
        </span>
      </Details>

      <GoBack to="/">Voltar</GoBack>
    </Container>
  )
}
