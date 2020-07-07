import React from 'react';
import Image from './Image';
import { PokemonDiv, ButtonStyle, StarDiv } from '../styles/styles';
import { Link } from 'react-router-dom';
import Button from './Button';
import { connect } from 'react-redux';
import { disableFavorite } from "../actions";

class Pokemon extends React.Component {
  render() {
    const { favorites, disableFavorite, pokemonInfo } = this.props;
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      id,
      moreInfo,
    } = pokemonInfo;
    return (
      <PokemonDiv>
        <section>
          <Image src={image} alt={name} />
        </section>
        <StarDiv>
          {favorites.includes(id) && (
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
            <Button onClick={disableFavorite} desc="Details" />
          </Link>
          <a href={moreInfo} target="_blanck" rel="noopener noreferrer">
            More info
          </a>
        </ButtonStyle>
      </PokemonDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.interactions.favorites,
});

const mapDispatchToProps = {
  disableFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
