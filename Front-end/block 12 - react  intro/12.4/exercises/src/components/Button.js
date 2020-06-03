import React from 'react';

class Button extends React.Component {
  render() {
    return <button onClick={this.props.xablau}>{this.props.desc}</button>;
  }
}

export default Button;
