import React, { Component } from 'react';
import Dropdown from './Dropdown';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Dropdown list={data}>a</Dropdown>
      </div>
    );
  }
}

export default App;
