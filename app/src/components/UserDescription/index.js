import React from 'react';

import './styles.css';

import Organizational from '../../assets/building.svg';
import Location from '../../assets/location.svg';
import Email from '../../assets/mail.svg';
import Website from '../../assets/link.svg';
import Twitter from '../../assets/twitter.svg';

function UserDescription() {
  return (
    <div className="user-description">
      <div className="user-image">
        <img alt="User" />
      </div>
      <div className="description-content">
        <h1>Developer’s full name</h1>
        <h2>@username</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum...</p>
        <div className="user-status">
          <span>200 followers</span>
          <span>130 following</span>
          <span>100 stars</span>
        </div>
        <div className="user-extra-info">
          <div className="extra-info-item">
            <img alt="Organizational" src={Organizational} />
            <span>Organizational</span>
          </div>
          <div className="extra-info-item">
            <img alt="Location" src={Location} />
            <span>Location</span>
          </div>
          <div className="extra-info-item">
            <img alt="Email" src={Email} />
            <span>Email</span>
          </div>
          <div className="extra-info-item">
            <img alt="Website" src={Website} />
            <span>Website</span>
          </div>
          <div className="extra-info-item">
            <img alt="Twitter" src={Twitter} />
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDescription;