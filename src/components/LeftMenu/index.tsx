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

type LeftMenuProps = {
  avatar: string;
  devName: string;
  devLogin: string;
  devBio?: string;
  followers: number;
  following: number;
  stars: number;
  organization?: string;
  location?: string;
  email?: string;
  website?: string;
  twitter?: string;
};

const LeftMenu = ({ ...props }: LeftMenuProps) => (
  <S.Wrapper>
    <S.Avatar src={props.avatar} />
    <S.DevInfo>
      <DevName>{props.devName}</DevName>
      <DevName isLogin={true}>@{props.devLogin}</DevName>
      <S.DevBio>{props.devBio}</S.DevBio>
      <S.DevNumbers>
        <DevNumber icon={<PeopleIcon />}>{props.followers} followers</DevNumber>
        <DevNumber icon={<HeartIcon />}>{props.following} following</DevNumber>
        <DevNumber icon={<StarIcon />}>{props.stars} stars</DevNumber>
      </S.DevNumbers>
    </S.DevInfo>
    <S.DevLinks>
      {!!props.organization && (
        <DevLink icon={<OrganizationIcon />}>{props.organization}</DevLink>
      )}
      {!!props.location && (
        <DevLink icon={<LocationIcon />}>{props.location}</DevLink>
      )}
      {!!props.email && <DevLink icon={<MailIcon />} href={"mailto:" + props.email}>{props.email}</DevLink>}
      {!!props.website && (
        <DevLink icon={<LinkIcon />} href={props.website}>{props.website}</DevLink>
      )}
      {!!props.twitter && (
        <DevLink icon={<TwitterIcon />} href={"https://twitter.com/" + props.twitter}>@{props.twitter}</DevLink>
      )}
    </S.DevLinks>
    <S.BackButton>Back</S.BackButton>
  </S.Wrapper>
);

export default LeftMenu;
