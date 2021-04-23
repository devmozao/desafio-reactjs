import * as S from "./styles";
import TextField from "components/TextField";
import SearchButton from "components/SearchButton";
import Title from "components/Title";

const Home = () => (
  <S.Wrapper>
    <Title />
    <S.SearchItems>
      <TextField />
      <SearchButton />
    </S.SearchItems>
  </S.Wrapper>
);

export default Home;
