import * as S from "./styles";

import { Search as SearchIcon } from "@styled-icons/octicons/Search";

type SearchButtonProps = {
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};
const SearchButton = ({ onClick }: SearchButtonProps) => (
  <S.Wrapper onClick={onClick}>
    <SearchIcon />
    <span>Search</span>
  </S.Wrapper>
);

export default SearchButton;
