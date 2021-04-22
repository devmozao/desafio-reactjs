import * as S from "./styles";
import TextField from "components/TextField";
import Button from "components/Button";
import Title from "components/Title";

const Home = () => (
  <S.Wrapper>
    <Title />
    <S.SearchItems>
      <TextField />
      <Button />
    </S.SearchItems>
  </S.Wrapper>
);

export default Home;
