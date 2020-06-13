import React from 'react';
import Pokemon from '../components/Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokedexData, favState } = this.props;
    return <Pokemon favState={favState} key={pokedexData.id} pokemonInfo={pokedexData} />;
  }
}

export default Pokedex;
