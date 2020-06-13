import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt, width, height } = this.props;
    return <img height={height} max-width={width} src={src} alt={alt} />;
  }
}

export default Image;
