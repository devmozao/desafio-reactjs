import { Wrapper, Name, Description, Numbers } from "./styles";

import {
  Star as StarIcon,
  DotFill as DotFillIcon,
} from "@styled-icons/octicons";

export type RepositoryProps = {
  name: string;
  description?: string;
  stars: number;
  updateAt: string;
  link: string;
};
const Repository = ({
  name,
  description = "This repository has no description.",
  stars,
  updateAt,
  link,
}: RepositoryProps) => (
  <Wrapper>
    <Name href={link} target="_blank" rel="noReferrer">
      {name}
    </Name>
    <Description>{description}</Description>
    <Numbers>
      <StarIcon /> {stars} stars <DotFillIcon /> Updated {updateAt}
    </Numbers>
  </Wrapper>
);

export default Repository;
