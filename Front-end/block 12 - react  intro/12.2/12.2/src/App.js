import React from 'react';
import data from './data';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import './styles/styles';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { light } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Pokedex pokedexData={data} />
      </div>
    </ThemeProvider>
  );
}

export default App;
