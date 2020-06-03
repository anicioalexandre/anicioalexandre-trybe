import React from 'react';
import data from './data';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import './styles/styles';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { light } from './styles/theme';
import { PokedexDiv } from './styles/styles';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { element: 0, data: data };
    this.changeDiv = this.changeDiv.bind(this);
  }
  changeDiv() {
    this.setState((state) => {
      return { element: state.element + 1 };
    });
  }

  changeData(type) {
    const newData = data.filter((a) => a.type === type)
    return this.setState({ data: newData });
  }

  render() {
    return (
      <ThemeProvider theme={light}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <PokedexDiv>
            <Pokedex pokedexData={this.state.data[this.state.element % this.state.data.length]} />
            <Button xablau={this.changeDiv} desc= "Change Pokemon"/>
            <Button xablau={() => this.changeData("Fire")} desc= "Fire"/>
            <Button xablau={() => this.changeData("Psychic")} desc= "Psychic"/>
          </PokedexDiv>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
