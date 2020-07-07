import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from './style';
import Navbar from './Navbar';

class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <Link to="/">alexandre portifolio</Link>
        <Navbar />
      </HeaderStyle>
    );
  }
}

export default Header;
