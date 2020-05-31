import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display:flex;
    justify-content:center;
    align-items:center;
    background: ${(props) => props.theme.colors.background};
    font-size: 12px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
    height: max-content;
  }
  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e63946; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #1d3557; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #457b9d; 
}
`;
