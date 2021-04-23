import * as S from "./styles";

import { Search as SearchIcon } from "@styled-icons/octicons/Search";

const SearchButton = () => (
  <S.Wrapper>
    <SearchIcon />
    <span>Search</span>
  </S.Wrapper>
);

export default SearchButton;
