import PropTypes from "prop-types";
import React from 'react';
const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <button
      type="button"
      disabled={isDisable}
      onClick={() => showComponent()}
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string,
  isDisable: PropTypes.bool,
  showComponent: PropTypes.func
}
export default Button;
