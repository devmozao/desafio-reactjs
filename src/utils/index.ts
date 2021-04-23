import { RepositoryProps } from "components/Repository";

export function formatUpdatedAt(value: string) {
  const lastUpdateDate = new Date(value);
  const todayDate = new Date();

  let timeDifference = todayDate.getTime() - lastUpdateDate.getTime();

  let dayDifference = timeDifference / (1000 * 3600 * 24);

  return `${dayDifference.toFixed(0.0)} days ago`;
}

export function sortRepos(repos: RepositoryProps[]) {
  return repos.sort((a, b) =>
    a.stars < b.stars ? 1 : b.stars < a.stars ? -1 : 0
  );
}

export function countStars(repos: RepositoryProps[]) {
  return repos.reduce((total, current) => total + current.stars, 0);
}
