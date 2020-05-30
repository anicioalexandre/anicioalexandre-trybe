// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Users from "./Users";
import data from "./data";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Users userProps={data}/>
      </div>
    );
  }
}

export default App;
