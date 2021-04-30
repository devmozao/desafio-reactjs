import * as S from "./styles";

import { Search as SearchIcon } from "@styled-icons/octicons/Search";


const SearchButton = () => (
  <S.Wrapper type="submit">
    <SearchIcon />
    <span>Buscar</span>
  </S.Wrapper>
);

export default SearchButton;
