import styled from 'styled-components';

export const HeaderDiv = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};
  display: flex;
  height: 10vh;
  justify-content: space-around;
`;

export const PokedexDiv = styled.article`
  background: #e63946;
  border-radius: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: max-content;
  justify-content: center;
  margin: 5vh auto 5vh auto;
  overflow-x: hidden;
  overflow-y: auto;
  width: max-content;
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
  width: 50%;
  section {
    align-items: flex-start;
    background: #a8dadc;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    height: 50%;
    justify-content: center;
    margin: 1vh 1vw 5vh 1vw;
    min-height: 50%;
    width: 90%;
    z-index: 100;
  }
  p {
    padding: 0.5vh 0.5vw 0.5vh 0.5vw;
  }
`;
export const ButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 50%;
  button {
    cursor: pointer;
  }
`;
