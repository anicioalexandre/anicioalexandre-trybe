import React from 'react';
import Image from './Image';
import { PokemonDiv, ButtonStyle, StarDiv } from '../styles/styles';
import { Link } from 'react-router-dom';
import Button from './Button';

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      id,
      moreInfo,
    } = this.props.pokemonInfo;
    return (
      <PokemonDiv>
        <section>
          <Image src={image} alt={name} />
        </section>
        <StarDiv>
          {this.props.favState.has(id) && (
            <Image
            height={`${30}px`}
            width={`${30}px`}
            src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold_Dark-512.png"
            alt="star"
            />
            )}
            <h1>{name}</h1>
        </StarDiv>
        <p> {type} </p>
        <p>{value + measurementUnit}</p>
        <ButtonStyle flex="column">
          <Link to={`/details/pokemon/${id}`}>
            <Button desc="Details" />
          </Link>
          <a href={moreInfo} target="_blanck" rel="noopener noreferrer">
            More info
          </a>
        </ButtonStyle>
      </PokemonDiv>
    );
  }
}

export default Pokemon;
