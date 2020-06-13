import './styles/styles';
import Button from './components/Button';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import React from 'react';
import data from './data';
import { PokedexDiv, ButtonStyle } from './styles/styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/theme';
import NotFound from './components/Notfound';
import Input from './components/Input';

const setFavoritos = new Set();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: 0,
      data: data,
      disable: false,
      checkbox: false,
      disableCheck: false,
      favState: setFavoritos,
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
      const newData = data.filter((a) => a.type === type);
      localStorage.setItem('type', type);
      if (newData.length === 1)
        this.setState({
          disable: true,
          data: newData,
          checkbox: false,
          disableCheck: true,
        });
      else
        this.setState({
          disable: false,
          data: newData,
          checkbox: false,
          disableCheck: true,
        });
    } else {
      localStorage.removeItem('type');
      return this.setState({
        disable: false,
        data: data,
        checkbox: false,
        disableCheck: false,
      });
    }
  }

  changeCheck() {
    const { checkbox } = this.state;
    this.setState({ checkbox: !checkbox });
  }

  favAdd({ id }) {
    const {favState} = this.state;
    if (setFavoritos.has(id)) setFavoritos.delete(id);
    else setFavoritos.add(id);
    localStorage.setItem('ids', JSON.stringify([...favState]));
    this.setState({ favState: setFavoritos });
  }

  favShow() {
    const { checkbox, data, favState } = this.state;
    if (!checkbox && favState.size > 0) {
      const favArr = data.filter((elem) =>
        [...favState].includes(elem.id)
      );
      this.setState({ data: favArr, disableCheck: false });
    } else {
      this.changeData();
    }
  }

  // carregando o data atual de acordo com a ultima seleção salva no localStorage
  componentDidMount() {
    const recapType = localStorage.getItem('type');
    const getIds = JSON.parse(localStorage.getItem('ids'));
    if (recapType || getIds) {
      getIds.forEach(elem => setFavoritos.add(elem)) //re-adding all saved data into the set setFavoritos
      this.setState({favState: setFavoritos}) // reloading all
      this.changeData(recapType);
    } else this.changeData();
  }
  
  render() {
    const arr = data.map((pokemon) => pokemon.type);
    const uniqueTypes = Array.from(new Set(arr));
    return (
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <PokedexDiv background="#e63946" margin="5vh auto 5vh auto">
              <Pokedex
                favState={this.state.favState}
                pokedexData={
                  this.state.data[this.state.element % this.state.data.length]
                }
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
                  disable={this.state.disable}
                />
                <Input
                  isDisabled={this.state.disableCheck}
                  onChange={() => {
                    this.changeCheck();
                    this.favShow();
                  }}
                  isChecked={this.state.checkbox}
                  label="Show favorites"
                />
              </ButtonStyle>
            </PokedexDiv>
          </Route>

          <Route path="/details/pokemon/:id">
            <PokemonDetails
              onClick={() =>
                this.favAdd(
                  this.state.data[this.state.element % this.state.data.length]
                )
              }
              favState={this.state.favState}
              pokedexData={
                this.state.data[this.state.element % this.state.data.length]
              }
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
