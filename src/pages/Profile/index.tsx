import LeftMenu, { UserProps } from "components/LeftMenu";
import Repository, { RepositoryProps } from "components/Repository";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findRepositories } from "services/RepositoryService";
import { findUserData } from "services/UserService";
import { countStars, formatUpdatedAt, sortRepos } from "utils";
import * as S from "./styles";

const Profile = () => {
  const { username } = useParams<{ username: string }>();

  const [userData, setUserData] = useState<UserProps>({
    avatar: "",
    devLogin: "",
    devName: "",
    followers: 0,
    following: 0,
  });
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    findRepositories(username).catch(({data})=>
      setRepositories((repositories) => [...repositories, data])
    )
    findUserData(username).catch(({data})=>
      setUserData(data)
    );
  }, []);

  useEffect(() => {
    setUserData({ ...userData, stars: countStars(repositories) });
    setRepositories((repositories) => sortRepos(repositories));
  }, [repositories]);

  return (
    <S.Wrapper>
      <LeftMenu {...userData} />
      <S.RepositoryList>
        {!!repositories &&
          repositories.map((repository, index) => {
            return <Repository key={index} {...repository} />;
          })}
      </S.RepositoryList>
    </S.Wrapper>
  );
};

export default Profile;
