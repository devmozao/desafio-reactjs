import DevName from "components/DevName";
import DevNumber from "components/DevNumber";
import DevLink from "components/DevLink";
import * as S from "./styles";

import { Heart as HeartIcon } from "@styled-icons/octicons/Heart";
import { Star as StarIcon } from "@styled-icons/octicons/Star";
import { People as PeopleIcon } from "@styled-icons/octicons/People";
import { Organization as OrganizationIcon } from "@styled-icons/octicons/Organization";
import { Location as LocationIcon } from "@styled-icons/octicons/Location";
import { Mail as MailIcon } from "@styled-icons/octicons/Mail";
import { Link as LinkIcon } from "@styled-icons/octicons/Link";

import { Twitter as TwitterIcon } from "@styled-icons/feather/Twitter";
import { Link } from "react-router-dom";
import DevHeading from "components/DevHeading";

export type UserProps = {
  avatar: string;
  devName: string;
  devLogin: string;
  devBio?: string;
  followers: number;
  following: number;
  stars?: number;
  organization?: string;
  location?: string;
  email?: string;
  website?: string;
  twitter?: string;
};

const LeftMenu = ({ ...props }: UserProps) => (
  <S.Wrapper>
    <S.Avatar src={props.avatar} />
    <S.DevInfo>
      <DevName>{props.devName}</DevName>
      <DevName isLogin={true}>@{props.devLogin}</DevName>
      {!!props.devBio && <S.DevBio>{props.devBio}</S.DevBio>}
      <S.DevNumbers>
        <DevNumber icon={<PeopleIcon />}>{props.followers} followers</DevNumber>
        <DevNumber icon={<HeartIcon />}>{props.following} following</DevNumber>
        <DevNumber icon={<StarIcon />}>{props.stars} stars</DevNumber>
      </S.DevNumbers>
    </S.DevInfo>
    <S.DevLinks>
      {!!props.organization && (
        <DevHeading icon={<OrganizationIcon />}>{props.organization}</DevHeading>
      )}
      {!!props.location && (
        <DevHeading icon={<LocationIcon />}>{props.location}</DevHeading>
      )}
      {!!props.email && (
        <DevLink icon={<MailIcon />} href={"mailto:" + props.email}>
          {props.email}
        </DevLink>
      )}
      {!!props.website && (
        <DevLink icon={<LinkIcon />} href={props.website}>
          {props.website}
        </DevLink>
      )}
      {!!props.twitter && (
        <DevLink
          icon={<TwitterIcon />}
          href={"https://twitter.com/" + props.twitter}
        >
          @{props.twitter}
        </DevLink>
      )}
    </S.DevLinks>
    <S.BackButton>
      <Link to="/">Voltar</Link>
    </S.BackButton>
  </S.Wrapper>
);

export default LeftMenu;
