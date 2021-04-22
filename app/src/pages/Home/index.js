import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../components/Footer';
import Search from '../../assets/search.png';

import './styles.css';
import api from '../../services/api';

function Home() {
  const history = useHistory();
  const [ username, setUsername ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    api.get(`/users/${username}`).then(({data}) => {
      setErrorMessage('');
      history.push(`/profile/${username}`);
    }).catch(() => {
      setErrorMessage('Usuário não encontrado.');
    });
  }

  return (
    <div className="content">
      <div className="home">
        <h1>Search Devs</h1>
        <form>
          <input placeholder="Type the username here..." value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={handleSearch}>
            <img alt="Search" src={Search}></img>
          </button>
        </form>
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </div>
      <Footer />
    </div>
  );
}

export default Home;