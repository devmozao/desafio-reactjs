import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../components/Footer';
import Search from '../../assets/search.png';

import './styles.css';

function Home() {
  const history = useHistory();
  const [ username, setUsername ] = useState('');

  function handleSearch() {
    history.push(`/profile/${username}`)
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;