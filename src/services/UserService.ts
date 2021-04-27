import { UserProps } from "components/LeftMenu";
import { axios } from "./axios";

export const findUserData = async (username: string) => {
  let user: UserProps = {
    avatar: "",
    devLogin: "",
    devName: "",
    followers: 0,
    following: 0,
  }
  await axios
    .get(`/users/${username}`)
    .then(({ data }) => {
      user = {
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


    })
    return user;
};
