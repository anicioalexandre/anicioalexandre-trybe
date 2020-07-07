import React from 'react';
import Pokemon from '../components/Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokedexData } = this.props;
    return <Pokemon pokemonInfo={pokedexData} />;
  }
}

export default Pokedex;
