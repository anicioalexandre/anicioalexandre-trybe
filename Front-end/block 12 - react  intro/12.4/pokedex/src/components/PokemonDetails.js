import React from 'react';
import Image from './Image';
import {
  PokemonDiv,
  ButtonStyle,
  FlexColumn,
  FlexRow,
  StarDiv,
} from '../styles/styles';
import { Link } from 'react-router-dom';
import Button from './Button';
import { addFavorite } from '../actions';
import { connect } from 'react-redux';

class PokemonDetails extends React.Component {
  
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      id,
      moreInfo,
      foundAt,
      summary,
    } = this.props.pokedexData;
    const { addFavorite, favorites } = this.props;
    return (
      <FlexRow>
        <PokemonDiv>
          <section>
            <Image src={image} alt={name} />
          </section>
          <StarDiv>
            {favorites.includes(id) && (
              <Image
                height={`${30}px`}
                width={`${5}px`}
                src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold_Dark-512.png"
                alt="star"
              />
            )}
            <h1>{name}</h1>
          </StarDiv>
          <p> {type} </p>
          <p>{value + measurementUnit}</p>
          <ButtonStyle flex="column" justify="center">
            <Button
              onClick={() => addFavorite(id)}
              desc={favorites.includes(id) ? 'Remove favorite' : 'Add favorite'}
            />
            <Link to={`/`}>
              <Button desc="Home" />
            </Link>
          </ButtonStyle>
          <a href={moreInfo} target="_blanck">
            More info
          </a>
        </PokemonDiv>
        <FlexColumn background="#e63946">
          <h2>Locations:</h2>
          <FlexRow>
            {foundAt.map((place) => (
              <div key={place.location + place.map}>
                <h3>{place.location}</h3>
                <Image src={place.map} alt={name + place.location} />
              </div>
            ))}
          </FlexRow>
          <h2>Summary:</h2>
          <section>
            <p>{summary}</p>
          </section>
        </FlexColumn>
      </FlexRow>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.interactions.favorites,
});

const mapDispatchToProps = {
  addFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
