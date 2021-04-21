import React from 'react';

import './styles.css';

import Star from '../../assets/star.svg';
import LastTimeUpdated from '../../assets/clock.svg';

function Card({data}) {

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 0 }
  ];
  
  function timeSince(date) {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
  }

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
          <span>{timeSince(new Date(data.updated_at))}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;