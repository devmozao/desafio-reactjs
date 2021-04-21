import React from 'react';

import './styles.css';

import Organizational from '../../assets/building.svg';
import Location from '../../assets/location.svg';
import Email from '../../assets/mail.svg';
import Website from '../../assets/link.svg';
import Twitter from '../../assets/twitter.svg';

function UserDescription({data}) {
  return (
    <div className="user-description">
      <div className="user-image">
        <img alt="User" src={data.avatar_url} />
      </div>
      <div className="description-content">
        <a href={data.html_url} target="_blank">{data.name}</a>
        <h2>@{data.login}</h2>
        <p>{data.bio}</p>
        <div className="user-status">
          <span>{data.followers} followers</span>
          <span>{data.following} following</span>
          <span>{data.public_repos} repositories</span>
        </div>
        <div className="user-extra-info">
          <div className="extra-info-item">
            <img alt="Organizational" src={Organizational} />
            <span>{data.company || 'No company'}</span>
          </div>
          <div className="extra-info-item">
            <img alt="Location" src={Location} />
            <span>{data.location || 'No location'}</span>
          </div>
          <div className="extra-info-item">
            <img alt="Email" src={Email} />
            <span>{data.email || 'No email'}</span>
          </div>
          <a href={data.blog} target="_blank" className="extra-info-item">
            <img alt="Website" src={Website} />
            <span>{data.blog || 'No website'}</span>
          </a>
          <a href={`https://twitter.com/${data.twitter_username}`} target="_blank" className="extra-info-item">
            <img alt="Twitter" src={Twitter} />
            <span>{data.twitter_username || 'No twitter'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDescription;