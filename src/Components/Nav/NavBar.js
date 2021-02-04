import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 3px 0 12px 12px;
    font-weight: 1200px;
    font-size: 18px;
    color: black;

    &:focus,
    &:hover {
      filter: drop-shadow(0 0 0.1rem #000000);
    }
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='logo'>Foodful</div>
      </Link>
      <Burger />
    </Nav>
  );
};

export default NavBar;
