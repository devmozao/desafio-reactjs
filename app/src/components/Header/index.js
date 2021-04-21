import React from 'react';
import BackIcon from '../../assets/back-arrow.png';

import './styles.css';

function Header() {
  return (
    <header>
      <a className="back-button">
        <img alt="Back" src={BackIcon} />
        <span>Voltar</span>
      </a>
      <div>
        <h1>Search Devs</h1>
      </div>
    </header>
  );
}

export default Header;