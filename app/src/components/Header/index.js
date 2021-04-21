import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../../assets/back-arrow.png';

import './styles.css';

function Header() {
  return (
    <header>
      <Link className="back-button" to="/">
        <img alt="Back" src={BackIcon} />
        <span>Voltar</span>
      </Link>
      <div>
        <h1>Search Devs</h1>
      </div>
    </header>
  );
}

export default Header;