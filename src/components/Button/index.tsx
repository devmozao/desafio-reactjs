import * as S from "./styles";

import { Search as SearchIcon } from "@styled-icons/feather/Search";

const Button = () => (
  <S.Wrapper>
    <SearchIcon />
    <span>Search</span>
  </S.Wrapper>
);

export default Button;
