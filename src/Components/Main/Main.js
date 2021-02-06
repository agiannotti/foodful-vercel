import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/rootsnip.png';
import NavBar from '../Nav/NavBar';

export default function Main() {
  return (
    <div className='border-main'>
      <section className='App-header'>
        <NavBar />
      </section>
      <section className='main-section'>
        <div className='logo-main'>
          <img src={logo} alt='logo' width='215px' height='295px' />
        </div>
        <div className='splash-paragraph'>
          <h1>Locate free food, or provide a bit of your own.</h1>
        </div>
        <div>
          <Link to='/locate'>
            <button className='main-search'>Search</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
