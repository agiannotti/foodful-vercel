import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import placeholder from '../../Images/rootsnip.png';
// import background from '../../Images/rootsnip.png';
import NavBar from '../Nav/NavBar';

export default function Main() {
  return (
    <div className='border-main'>
      <section className='App-header'>
        <NavBar />
      </section>
      <section className='main-section'>
        <div>
          <h1>
            <img
              className='logo-main'
              src={placeholder}
              alt='placeholder'
              width='435px'
              height='365px'
            />
          </h1>
        </div>
        <div className='main-paragraph'>
          <h1>Locate free food, or provide a bit of your own.</h1>
        </div>
        <div>
          <Link to='/locate'>
            <button className='main-search'>Search</button>
          </Link>
        </div>
      </section>
      <br />
    </div>
  );
}
