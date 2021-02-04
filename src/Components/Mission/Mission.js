import React from 'react';
import NavBar from '../Nav/NavBar';
import box from '../../Images/box.png';
import apple from '../../Images/apple.png';
import signal from '../../Images/signal.png';
import silverware from '../../Images/silverware.png';
import './Mission.css';

export default function Mission() {
  return (
    <div className='missionBody'>
      <NavBar />
      <br />

      <section className='bottom-section'>
        <div>
          <img
            className='logo-main'
            src={apple}
            alt='placeholder'
            width='150px'
            height='150px'
          />
          <div className='main-paragraph'>
            <p>
              If you'd like to donate food or resources to those in your area
              that may need help, Foodful can allow you to search for nearby
              food banks, drives, and user-created "supply drop" locations.
            </p>
          </div>
        </div>
        <div>
          <img
            className='logo-main'
            src={signal}
            alt='placeholder'
            width='150px'
            height='150px'
          />
          <div className='main-paragraph'>
            <p>
              Mark a location on our map to signal a location that is currently
              providing resources.
            </p>
          </div>
        </div>
      </section>
      <section className='middle-section'>
        <div>
          <img
            className='logo-main'
            src={box}
            alt='placeholder'
            width='150px'
            height='150px'
          />
          <div className='main-paragraph'>
            <p>
              Foodful aims to unify communities by creating a platform for
              people to share their resources.
            </p>
          </div>
        </div>
        <div>
          <img
            className='logo-main'
            src={silverware}
            alt='placeholder'
            width='150px'
            height='150px'
          />
          <div className='main-paragraph'>
            <p>
              If you're hungry, or you need to feed your family, you can use
              this app to search for free food supplies within your community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
