import React from 'react';
import { HeaderDiv } from '../styles/styles';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <h1>Pokédex</h1>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </HeaderDiv>
    );
  }
}

export default Header;
