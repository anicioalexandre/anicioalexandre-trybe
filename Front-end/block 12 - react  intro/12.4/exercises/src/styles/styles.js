import styled from 'styled-components';

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secundary};
  justify-content: space-around;
  height: 10vh;
  background: ${(props) => props.theme.colors.primary};
`;

export const PokedexDiv = styled.article`
  background: #e63946;
  border-radius: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 55vh;
  justify-content: space-evenly;
  margin: 5vh 35vw 5vh 35vw;
  overflow-x: hidden;
  overflow-y: auto;
`;
export const PokemonDiv = styled.div`
  align-items: center;
  background: #457b9d;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  margin: 1vh 1vw 1vh 1vw;
  padding: 1vh 1vw 1vh 1vw;
  section {
    align-items: flex-start;
    background: #a8dadc;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    margin: 1vh 1vw 5vh 1vw;
    width: 90%;
  }
  p {
    padding: 0.5vh 0.5vw 0.5vh 0.5vw;
  }
`;
