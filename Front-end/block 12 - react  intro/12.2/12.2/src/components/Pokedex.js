import React from 'react';
import Pokemon from '../components/Pokemon';
import {PokedexDiv} from "../styles/styles";

class Pokedex extends React.Component {
  render() {
    const { pokedexData } = this.props;
    return (
      <PokedexDiv>
        {pokedexData.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemonInfo={pokemon} />
        ))}
      </PokedexDiv>
    );
  }
}

export default Pokedex;
