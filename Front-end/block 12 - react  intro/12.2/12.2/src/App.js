import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokedexData={data} />
    </div>
  );
}

export default App;
