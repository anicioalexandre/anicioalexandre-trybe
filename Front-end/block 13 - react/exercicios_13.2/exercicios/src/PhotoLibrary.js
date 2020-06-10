import React, { Component } from 'react';

class PhotoLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, image: '', handleClick: false };
    this.handleClick = this.handleClick.bind(this);
  }

  async fetchData() {
    try {
      const fetchdata = await fetch('https://dog.ceo/api/breeds/image/random');
      const jsonData = await fetchdata.json();
      this.setState({ loaded: true, image: jsonData.message });
    } catch (error) {
      this.setState({ loaded: true, error });
    }
  }
  // dando fetch quando renderizamos pela primeira vez
  componentDidMount() {
    this.fetchData();
  }

  handleClick() {
    this.fetchData();
  }
  // so atualizando o componente se não conter dogs Terrier
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.image.includes('terrier')) {
      return false;
    }
    return true;
  }

  // guardando a ultima url no local storage
  componentDidUpdate() {
    const {image} = this.state;
    localStorage.setItem('dogURL', image)
    alert(`Raça: ${image.split('/')[4]}`)
  }

  render() {
    console.log('render');
    const { loaded, error, image } = this.state;
    if (!loaded) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;
    else
      return (
        <>
          <img src={image} alt={image} />
          <button onClick={this.handleClick}>Trocar Dog!</button>
        </>
      );
  }
}

export default PhotoLibrary;
