import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: false,
      title: this.props.children,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState = () => {
    const { content } = this.state;
    this.setState({ content: !content });
  };

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  render() {
    const { title, content } = this.state;
    const { list } = this.props;

    return (
      <div className="Dropdown">
        <div onClick={this.changeState} className="actual">
          {title}
        </div>
        {content &&
          list.map((elem) => (
            <p onClick={() => this.changeTitle(elem.item)} key={elem.id}>
              {elem.item}
            </p>
          ))}
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.string,
  content: PropTypes.func,
  onClick: PropTypes.func,
  onClickP: PropTypes.func,
};

Dropdown.defaultProps = {
  children: 'a (default)',
};

export default Dropdown;
