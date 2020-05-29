import React from 'react';
import Image from './Image';

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
      <div>
        <Image src={image} alt={name} />
        <h1>{name}</h1>
        <p> {type} </p>
        <p>{value + measurementUnit}</p>
        <a href={moreInfo} target="_blanck">More info</a>
      </div>
    );
  }
}

export default Pokemon;
