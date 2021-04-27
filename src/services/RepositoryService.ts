import { RepositoryProps } from "components/Repository";
import { formatUpdatedAt } from "utils";
import { axios } from "./axios";

export type RepoApiProps = {
  name: string;
  stargazers_count: number;
  updated_at: string;
  description: string;
  html_url: string;
};

export const findRepositories = async (username: string) => {
  const repositories: RepositoryProps[] = [];

  await axios
    .get(`/users/${username}/repos`)
    .then(({ data }) => {
      data.forEach((repo: RepoApiProps) => {
        const updateAt = formatUpdatedAt(repo.updated_at);
        const repository: RepositoryProps = {
          name: repo.name,
          stars: repo.stargazers_count,
          updateAt,
          description: repo.description,
          link: repo.html_url,
        };
        repositories.push(repository)
      });
    })

  return repositories;
};
