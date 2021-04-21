import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import UserDescription from '../../components/UserDescription';
import api from '../../services/api';

import './styles.css';


function Profile() {
  const { username } = useParams();
  const [ userDescriptionData, setUserDescriptionData ] = useState({});
  const [ cardsData, setCardsData ] = useState([]);

  useEffect(() => {
    api.get(`/users/${username}`).then(({data}) => {
      const newUserDescriptionData = {
        login: data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
        name: data.name,
        company: data.company,
        blog: data.blog,
        location: data.location,
        email: data.email,
        followers: data.followers,
        following: data.following,
        twitter_username: data.twitter_username,
        html_url: data.html_url,
        public_repos: data.public_repos
      }
      setUserDescriptionData(newUserDescriptionData);
    });

    api.get(`/users/${username}/repos`).then(({data}) => {
      const newCardsData = [];
      data.map((repository) => {
        newCardsData.push({
          html_url: repository.html_url,
          description: repository.description,
          name: repository.name,
          updated_at: repository.updated_at,
          stargazers_count: repository.stargazers_count
        });
      });

      // Order the array from more stars to less
      newCardsData.sort((a,b) => a.stargazers_count < b.stargazers_count ? 1 : a.stargazers_count > b.stargazers_count ? -1 : 0 )

      setCardsData([...newCardsData]);
    })
  }, [username])

  return (
    <div className="content">
      <Header />
      <div className="profile">
        { userDescriptionData && <UserDescription data={userDescriptionData} /> }
        <div className="scroll-view">
          <div className="repository-cards">
            { cardsData && cardsData.map((data) => <Card data={data} />) }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;