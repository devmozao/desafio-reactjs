import React from 'react';

import './styles.css';

import Star from '../../assets/star.svg';
import LastTimeUpdated from '../../assets/clock.svg';

function Card({data}) {
  return (
    <div className="repository-card">
      <a href={data.html_url} target="_blank" >{data.name}</a>
      <p>{data.description}</p>
      <div className="repository-card-bottom">
        <div>
          <img alt="Star" src={Star} />
          <span>{data.stargazers_count} stars</span>
        </div>
        <div>
          <img alt="Last time updated" src={LastTimeUpdated}/>
          <span>{data.updated_at}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;