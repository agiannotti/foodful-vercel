import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  bottom: 14px;
  right: 10px;

  li {
    padding: 18px 10px;
    text-decoration: none;
  }
  @media (max-width: 2000px) {
    flex-flow: column nowrap;
    background-color: #3d3d3d;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 155px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      color: #fff;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #ccc;
  font-size: 25px;
  padding: 15px 0 5px 15px;

  &:focus,
  &:hover {
    filter: drop-shadow(0 0.1rem 0.1rem #000000);
  }
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <StyledLink to='/'>Home</StyledLink>
      </li>
      <li>
        <StyledLink to='/mission'>Mission</StyledLink>
      </li>
      <li>
        <StyledLink to='/locate'>Locate</StyledLink>
      </li>
      <li>
        <StyledLink to='/add'>Provide</StyledLink>
      </li>
    </Ul>
  );
};

export default RightNav;
