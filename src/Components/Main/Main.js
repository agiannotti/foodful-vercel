import React, { Component } from 'react';
import './Main.css';
import logo from '../../Images/rootsnip.png';
import NavBar from '../Nav/NavBar';

export default class Main extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/locate');
  };
  render() {
    return (
      <div className='border-main'>
        <section className='App-header'>
          <NavBar />
        </section>
        <section className='main-section'>
          <div className='logo-main'>
            <img className='logo-img' src={logo} alt='logo' />
          </div>
          <div className='splash-paragraph'>
            <h1>Locate free food, or provide a bit of your own.</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <button type='submit' className='main-search'>
              Find a Provider
            </button>
          </form>
        </section>
      </div>
    );
  }
}
