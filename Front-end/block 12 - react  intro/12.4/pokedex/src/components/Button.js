import React from 'react';

class Button extends React.Component {
  render() {
    return <button onClick={this.props.onClick} disabled={this.props.disable}>{this.props.desc}</button>;
  }
}

export default Button;
