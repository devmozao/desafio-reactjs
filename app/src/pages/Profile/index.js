import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserDescription from '../../components/UserDescription';

import './styles.css';

import Card from '../../components/Card';

function Profile() {
  return (
    <div className="content">
      <Header />
      <div className="profile">
        <UserDescription />
        <div className="repository-cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;