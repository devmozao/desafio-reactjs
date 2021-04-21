import React from 'react';
import Footer from '../../components/Footer';
import Search from '../../assets/search.png';


import './styles.css';

function Home() {
  return (
    <div className="content">
      <div className="home">
        <h1>Search Devs</h1>
        <form>
          <input placeholder="Type the username here..." />
          <button>
            <img alt="Search" src={Search}></img>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Home;