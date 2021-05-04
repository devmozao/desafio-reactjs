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

class EmptyRepositoryError extends Error {
  constructor() {
    super();
    this.name = "EmptyRepositoryError";
  }
}

export const findRepositories = async (username: string) => {
  try {
    const repositories: RepositoryProps[] = [];

    const { data } = await axios.get(`/users/${username}/repos`);

    if (data.length == 0) throw new EmptyRepositoryError();

    data.forEach((repo: RepoApiProps) => {
      const updateAt = formatUpdatedAt(repo.updated_at);
      const repository: RepositoryProps = {
        name: repo.name,
        stars: repo.stargazers_count,
        updateAt,
        description: repo.description,
        link: repo.html_url,
      };
      repositories.push(repository);
    });

    return repositories;
  } catch (error) {
    if (error instanceof EmptyRepositoryError)
      throw new Error("User doesn't have any public repository.");
    else
      throw new Error(
        "Oops! Repositories couldn't be loaded. Try again later."
      );
  }
};
