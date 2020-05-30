import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokedexData } = this.props;
    return (
      <div className="pokemonDiv">
        {pokedexData.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemonInfo={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
