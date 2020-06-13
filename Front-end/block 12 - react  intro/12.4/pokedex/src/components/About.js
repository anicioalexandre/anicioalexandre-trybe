import React from 'react';
import Image from './Image';
import { ButtonStyle, FlexColumn } from '../styles/styles';
import { Link } from 'react-router-dom';
import Button from './Button';

class About extends React.Component {
  render() {
    return (
      <FlexColumn margin="5vh 5vw 5vh 5vw" background="#e63946">
        <Image src="https://cdn.bulbagarden.net/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png" />
        <section>
          The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia)
          is a digital encyclopedia created by Professor Oak as an invaluable
          tool to Trainers in the Pokémon world. It gives information about all
          Pokémon in the world that are contained in its database, although it
          differs in how it acquires and presents information over the different
          media. However, they are also only given to a few Trainers at a time,
          generally to the ones that are felt to have exceptional potential and
          skill. Regional Pokédexes give information about Pokémon native to its
          particular region, while the National Pokédex records information
          about all known Pokémon. Pokédex entries typically describe a Pokémon
          in only two or three sentences. They may give background information
          on the habitat or activities of a Pokémon in the wild or other
          information on the Pokémon's history or anatomy. Pokédex entries also
          include height, weight, cry, footprint (prior to Generation VI),
          location, other forms, and a picture of the Pokémon. Sometimes the
          Pokédex might contain inaccurate or mythical information. For example,
          some of Tentacruel's entries describes it as having 80 tentacles when
          only 14 are visible.
          <a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex" target="_blank" rel='noopener noreferrer'>
            Source.
          </a>
        </section>
        <ButtonStyle flex="row">
            <Link to={`/`}>
              <Button desc="Home" />
            </Link>
          </ButtonStyle>
      </FlexColumn>
    );
  }
}

export default About;
