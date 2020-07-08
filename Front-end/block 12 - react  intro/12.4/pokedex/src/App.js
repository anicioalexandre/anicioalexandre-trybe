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
import { changePokemon, filterData, filterFavorite } from './actions';
import { connect } from 'react-redux';
import { getLocal } from './service/localStorage';

class App extends React.Component {
  // carregando o data atual de acordo com a ultima seleção salva no localStorage
  componentDidMount() {
    console.log('deu mount');
    const { filterData } = this.props;
    const recapType = getLocal('nature');
    if (recapType) filterData(recapType);
  }

  render() {
    const arr = pokemons.map((pokemon) => pokemon.type);
    const uniqueTypes = Array.from(new Set(arr));
    const {
      actual,
      changePokemon,
      selected,
      filterData,
      data,
      favorites,
      checkbox,
      filterFavorite,
    } = this.props;
    return (
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <PokedexDiv background="#e63946" margin="5vh auto 5vh auto">
              <Pokedex pokedexData={data[selected % data.length]} />
              <ButtonStyle flex="column" justify="space-evenly">
                {/* gerando os botões dinamicamente */}
                {uniqueTypes.map((pokemonType) => (
                  <Button
                    onClick={() => filterData(pokemonType)}
                    desc={pokemonType}
                    key={pokemonType}
                  />
                ))}
                <Button onClick={() => filterData()} desc="All" />
                <Button
                  onClick={() => changePokemon()}
                  desc="Change Pokemon"
                  disable={data.length <= 1}
                />
                <Input
                  isDisabled={favorites.length < 1}
                  onChange={() => filterFavorite(favorites)}
                  isChecked={checkbox}
                  label="Show favorites"
                />
              </ButtonStyle>
            </PokedexDiv>
          </Route>

          <Route
            path="/details/pokemon/:id"
            render={(props) => (
              <PokemonDetails {...props} pokedexData={actual} />
            )}
          />

          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  selected: state.interactions.selected,
  data: state.interactions.data,
  favorites: state.interactions.favorites,
  checkbox: state.interactions.checkbox,
  actual: state.interactions.actual,
});

const mapDispatchToProps = {
  changePokemon,
  filterData,
  filterFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
