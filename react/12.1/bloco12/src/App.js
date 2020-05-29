import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return <li>{value}</li>;
};
const compromissos = [
  'Estudar React',
  'Fazer compras',
  'Estudar',
  'Arrumar a cama',
  'Pagar contas',
];

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Nome name="Alexandre" />
        <Imagem className = "App-logo" alt="logo" />
        <Lista />
      </header>
    </div>
  );
}
function Nome(props) {
  return <h1>Hello, {props.name}.</h1>
}
function Imagem(props) {
  return <img src={logo} className={props.className} alt={props.logoName} />
}
function Lista() {
  return (
    <ul>
    Meus primeiros componentes no React :D
  {compromissos.map((tarefa) => task(tarefa))}
  </ul>
  )
}
export default App;
