import React from 'react';
import Image from './Image';
import {PokemonDiv} from "../styles/styles";

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      moreInfo,
    } = this.props.pokemonInfo;
    return (
      <PokemonDiv>
        <section>
        <Image src={image} alt={name} />
        </section>
        <h1>{name}</h1>
        <p> {type} </p>
        <p>{value + measurementUnit}</p>
        <a href={moreInfo} target="_blanck">More info</a>
      </PokemonDiv>
    );
  }
}

export default Pokemon;
