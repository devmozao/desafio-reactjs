import React from 'react';

import './styles.css';

import Star from '../../assets/star.svg';
import LastTimeUpdated from '../../assets/clock.svg';

function Card() {
  return (
    <div className="repository-card">
      <h1>Repository Name</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum...</p>
      <div className="repository-card-bottom">
        <div>
          <img alt="Star" src={Star} />
          <span>100 stars</span>
        </div>
        <div>
          <img alt="Last time updated" src={LastTimeUpdated}/>
          <span>Updated 30 days ago</span>
        </div>
      </div>
    </div>
  );
}

export default Card;