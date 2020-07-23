import React from 'react';
import '../App.css';
import Card from './Cards';
import Reddit from '../context/Reddit';

class Display extends React.Component {
  render() {
    const { loading, error, data } = this.context;
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    if (data) return data.map((child) => <Card key={child.title} data={child} />);
    return <h2>Digite sua pesquisa</h2>;
  }
}

Display.contextType = Reddit;

export default Display;
