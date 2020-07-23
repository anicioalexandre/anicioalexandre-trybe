import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import Reddit from './context/Reddit';
import fetchAPI from './services/fetchAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.getAPI = this.getAPI.bind(this);
    this.getAPISucess = this.getAPISucess.bind(this);
  }

  handleChange(value) {
    this.setState({ ...this.state, inputValue: value });
  }

  getAPI(inputValue) {
    const { loading } = this.state;
    if (loading) return null;
    this.setState({ loading: true });
    fetchAPI(inputValue).then(this.getAPISucess);
  }

  getAPISucess({data}) {
    this.setState({
      ...this.state,
      loading: false,
      data: data.children.map((d) => d.data),
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      handleChange: this.handleChange,
      getAPI: this.getAPI,
    };
    return (
      <Reddit.Provider value={contextValue}>
        <div className="App">
          <Header />
          <Display />
        </div>
      </Reddit.Provider>
    );
  }
}

export default App;
