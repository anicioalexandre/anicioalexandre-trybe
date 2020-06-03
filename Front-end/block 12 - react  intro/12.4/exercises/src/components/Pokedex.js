import React from 'react';
import Pokemon from '../components/Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokedexData } = this.props;
    return <Pokemon key={pokedexData.id} pokemonInfo={pokedexData} />;
  }
}

export default Pokedex;
