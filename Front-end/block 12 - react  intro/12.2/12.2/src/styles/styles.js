import styled from 'styled-components';

export const HeaderDiv = styled.header`
  display: flex;
  align-items:center;
  color: ${(props) => props.theme.colors.secundary};
  justify-content:space-around;
  height: 10vh;
  background: ${(props) => props.theme.colors.primary};
`;

export const PokedexDiv = styled.article`
  background: #e63946;
  border: 2px solid black;
  border-radius:5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 5vh 25vw 5vh 25vw;
`;
export const PokemonDiv = styled.div`
  align-items: center;
  background: #457b9d;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 1vh 1vw 1vh 1vw;
  flex-basis: 22vw;
  padding: 1vh 1vw 1vh 1vw;
  section {
    background: #a8dadc;
    border: 1px solid black;
    border-radius:5px;
    display: flex;
    justify-content: center;
    width:100%;
  }
`;
