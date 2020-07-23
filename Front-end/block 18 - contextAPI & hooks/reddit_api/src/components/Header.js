import React from 'react';
import '../App.css';
import Reddit from '../context/Reddit';

const Header = () => {
  return (
    <Reddit.Consumer>
      {({ handleChange, inputValue, getAPI }) => (
        <header>
          <input onChange={(e) => handleChange(e.target.value)} />
          <button onClick={() => getAPI(inputValue)}>pesquisar</button>
        </header>
      )}
    </Reddit.Consumer>
  );
};

export default Header;
