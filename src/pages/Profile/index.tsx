import LeftMenu, { UserProps } from "components/LeftMenu";
import Repository, { RepositoryProps } from "components/Repository";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios, RepoApiProps } from "services/axios";
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

  const findUserData = async (username: string) => {
    await axios
      .get(`/users/${username}`)
      .then(({ data }) => {
        const user: UserProps = {
          avatar: data.avatar_url,
          devLogin: data.login,
          devName: data.name,
          followers: data.followers,
          following: data.following,
          devBio: data.bio,
          email: data.email,
          location: data.location,
          organization: data.company,
          twitter: data.twitter_username,
          website: data.blog,
        };

        setUserData(user);
      })
      .catch(() => null);
  };

  const findRepositories = async (username: string) => {
    await axios
      .get(`/users/${username}/repos`)
      .then(({ data }) => {
        data.forEach((repo: RepoApiProps) => {
          const updateAt = formatUpdatedAt(repo.updated_at);
          const repository = {
            name: repo.name,
            stars: repo.stargazers_count,
            updateAt,
            description: repo.description,
            link: repo.html_url,
          };

          setRepositories((repositories) => [...repositories, repository]);
        });
      })
      .catch(() => null);
  };

  useEffect(() => {
    findRepositories(username);
    findUserData(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUserData({ ...userData, stars: countStars(repositories) });
    setRepositories(repositories => sortRepos(repositories));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
