import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle } from './style';

class Navbar extends React.Component {
  render() {
    return (
      <NavStyle>
        <Link to="/about">about me</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </NavStyle>
    );
  }
}

export default Navbar;
