import './styles/styles';
import Button from './components/Button';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import React from 'react';
import pokemons from './data';
import { PokedexDiv, ButtonStyle } from './styles/styles';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/theme';
import NotFound from './components/Notfound';
import Input from './components/Input';

// const setFavoritos = new Set();
class App extends React.Component {
  static recapFavorites() {
    const getIds = JSON.parse(localStorage.getItem('ids'));
    const setFavoritos = new Set(getIds); //re-adding all saved data into the set setFavoritos
    return setFavoritos;
  }
  constructor(props) {
    super(props);
    this.state = {
      element: 0,
      data: pokemons,
      checkbox: false,
      favState: App.recapFavorites(),
    };
    this.favAdd = this.favAdd.bind(this);
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
      const newData = pokemons.filter((a) => a.type === type);
      localStorage.setItem('type', type);
      this.setState({ data: newData });
    } else {
      localStorage.removeItem('type');
      return this.setState({ data: pokemons });
    }
  }

  changeCheck() {
    const { checkbox } = this.state;
    this.setState({ checkbox: !checkbox });
  }

  favAdd({ id }) {
    const { favState } = this.state;
    if (favState.has(id)) favState.delete(id);
    else favState.add(id);
    localStorage.setItem('ids', JSON.stringify([...favState]));
    this.setState({ favState: favState });
  }

  favShow() {
    const { checkbox, data, favState } = this.state;
    if (!checkbox && favState.size > 0) {
      const favArr = data.filter((elem) => [...favState].includes(elem.id));
      this.setState({ data: favArr });
    } else {
      this.changeData();
    }
  }

  // carregando o data atual de acordo com a ultima seleção salva no localStorage
  componentDidMount() {
    const recapType = localStorage.getItem('type');
    if (recapType) this.changeData(recapType);
    else this.changeData();
  }

  render() {
    const arr = pokemons.map((pokemon) => pokemon.type);
    const uniqueTypes = Array.from(new Set(arr));
    const { element, data, favState, checkbox } = this.state;
    return (
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <PokedexDiv background="#e63946" margin="5vh auto 5vh auto">
              <Pokedex
                favState={favState}
                pokedexData={data[element % data.length]}
              />
              <ButtonStyle flex="column" justify="space-evenly">
                {/* gerando os botões dinamicamente */}
                {uniqueTypes.map((pokemonType) => (
                  <Button
                    onClick={() => this.changeData(pokemonType)}
                    desc={pokemonType}
                    key={pokemonType}
                  />
                ))}
                <Button onClick={() => this.changeData()} desc="All" />
                <Button
                  onClick={() => this.changeDiv()}
                  desc="Change Pokemon"
                  disable={data.length <= 1}
                />
                <Input
                  isDisabled={favState.size < 1}
                  onChange={() => {
                    this.changeCheck();
                    this.favShow();
                  }}
                  isChecked={checkbox}
                  label="Show favorites"
                />
              </ButtonStyle>
            </PokedexDiv>
          </Route>

          <Route path="/details/pokemon/:id">
            <PokemonDetails
              onClick={() => this.favAdd(data[element % data.length])}
              favState={favState}
              pokedexData={data[element % data.length]}
            />
          </Route>
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
