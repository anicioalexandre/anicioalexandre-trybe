import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    padding: 0.5vh 0.5vw 0.5vh 0.5vw;
  }
  label, input {
    cursor: pointer;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
    font-size: 12px;
  }
  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e63946; 
  border-radius: 0.50px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #1d3557; 
  border-radius: 0.50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #457b9d; 
}
`;
