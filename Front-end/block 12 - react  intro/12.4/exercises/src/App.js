import React from 'react';
import data from './data';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import './styles/styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { light } from './styles/theme';
import { PokedexDiv, ButtonStyle } from './styles/styles';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { element: 0, data: data, disable: false };
  }
// alterando a o pokemon exibido
  changeDiv() {
    this.setState((state) => {
      return { element: state.element + 1 };
    });
  }
// mudando a data e salvando no localStorage de acorto com o tipo de pokemon
  changeData(type) {
    if (type) {
      const newData = data.filter((a) => a.type === type);
      localStorage.setItem('type', type);
      if (newData.length === 1) this.setState({ disable: true, data: newData });
      else this.setState({ disable: false, data: newData });
    } else {
      localStorage.clear();
      return this.setState({ disable: false, data: data });
    }
  }
// carregando o data atual de acordo com a ultima seleção salva no localStorage
  componentDidMount() {
    const recapType = localStorage.getItem('type');
    if (recapType) this.changeData(recapType);
    else this.changeData();
  }

  render() {
    const arr = data.map((pokemon) => pokemon.type);
    const uniqueTypes = Array.from(new Set(arr));
    return (
      <ThemeProvider theme={light}>
          <GlobalStyle />
          <Header />
          <PokedexDiv>
            <Pokedex
              pokedexData={
                this.state.data[this.state.element % this.state.data.length]
              }
            />
            <ButtonStyle>
              {/* gerando os botões dinamicamente */}
              {uniqueTypes.map((pokemonType) => (
                <Button
                  xablau={() => this.changeData(pokemonType)}
                  desc={pokemonType}
                  key={pokemonType}
                />
              ))}
              <Button xablau={() => this.changeData()} desc="All" />
              <Button
                xablau={this.changeDiv.bind(this)}
                desc="Change Pokemon"
                disable={this.state.disable}
              />
            </ButtonStyle>
          </PokedexDiv>
      </ThemeProvider>
    );
  }
}

export default App;
