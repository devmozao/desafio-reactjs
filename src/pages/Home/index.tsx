import { useState } from "react";
import { useHistory } from "react-router-dom";

import TextField from "components/TextField";
import Button from "components/Button";
import Title from "components/Title";

import { Wrapper, SearchItems, Error } from "./styles";

import { findUserData } from "services/UserService";
import { Search as SearchIcon } from "@styled-icons/octicons";

const Home = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSearch = async () => {
    try {
      if (username == "") throw Error;

      const { avatar } = await findUserData(username);

      if (avatar == "/img/userNotFound.png") throw Error;

      history.push(`/profile/${username}`);
    } catch (error) {
      setError("User not found!");
    }
  };

  return (
    <Wrapper>
      <Title />
      <SearchItems
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <TextField onChange={(e) => setUsername(e.target.value)} />
        <Button icon={<SearchIcon />}>Buscar</Button>
      </SearchItems>
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Home;
