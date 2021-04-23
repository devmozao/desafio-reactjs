import * as S from "./styles";
import TextField from "components/TextField";
import SearchButton from "components/SearchButton";
import Title from "components/Title";
import { useState } from "react";
import { axios } from "services/axios";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    axios.get(`/users/${username}`).then(()=>{
      history.push(`/profile/${username}`)
    })

  };

  return (
    <S.Wrapper>
      <Title />
      <S.SearchItems>
        <TextField onChange={(e) => setUsername(e.target.value)} />
        <SearchButton onClick={handleSearch} />
      </S.SearchItems>
    </S.Wrapper>
  );
};

export default Home;
