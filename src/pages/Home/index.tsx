import * as S from "./styles";
import TextField from "components/TextField";
import SearchButton from "components/SearchButton";
import Title from "components/Title";
import { useState } from "react";
import { axios } from "services/axios";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    axios.get(`/users/${username}`).then(()=>{
      history.push(`/profile/${username}`)
    }).catch(()=> setError("User not found!"))

  };

  return (
    <S.Wrapper>
      <Title />
      <S.SearchItems>
        <TextField onChange={(e) => setUsername(e.target.value)} />
        <SearchButton onClick={handleSearch} />
      </S.SearchItems>
      {!!error && (<S.Error>{error}</S.Error>)}
    </S.Wrapper>
  );
};

export default Home;
