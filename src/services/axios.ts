import Axios from "axios";
export const axios = Axios.create({
  baseURL: "https://api.github.com",

});

export type RepoApiProps = {
  name: string;
  stargazers_count: number;
  updated_at: string;
  description: string;
  html_url: string
};
