import styled from 'styled-components';

export const HeaderDiv = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};
  display: flex;
  height: 10vh;
  justify-content: space-around;
  a {
    color: ${(props) => props.theme.colors.secundary};
    text-decoration: none;
  }
`;

export const FlexColumn = styled.div`
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 5px;
  border: ${(props) => props.border};
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: ${(props) => props.margin};
  overflow-x: auto;
  overflow-y: auto;
  padding: 1vh;
  width: fit-content;
  section {
    background: #a8dadc;
    border-radius: 5px;
    border: 1px solid black;
    margin: 1vh 1vw 5vh 1vw;
    padding: 1vh 1vw 5vh 1vw;
    text-align: center;
  }
`;
export const FlexRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3vh 3vw;
  text-align: center;
  width: 100%;
  img {
    padding: 1vh 1vw;
  }
`;

export const PokedexDiv = styled.article`
  background: #e63946;
  border-radius: 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vh 1vw 1vh 1vw;
  padding: 1vh 1vw 1vh 1vw;

  section {
    align-items: center;
    background: #a8dadc;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: center;
    margin: 1vh 1vw 1vh 1vw;
    min-height: 50%;
    width: 100px;
  }
  p {
    padding: 0.5vh 0.5vw 0.5vh 0.5vw;
  }
`;
export const StarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    padding: 0;
  }
`;

export const ButtonStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${(props) => props.flex};
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify};
  padding: 0.5vh 1vw;
  text-align: center;
  font-weight: 700;
  button {
    font-weight: 700;
    border-color: ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    outline: none;
    width: 80px;
  }
  button:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
