import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return <li>{value}</li>;
};
const compromissos = [
  'lavar louça',
  'fazer compras',
  'estudar',
  'arrumar a cama',
  'pagar contas',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          Minha primeira lista no React xD
        {compromissos.map((tarefa) => task(tarefa))}
        </ul>
      </header>
    </div>
  );
}

export default App;
