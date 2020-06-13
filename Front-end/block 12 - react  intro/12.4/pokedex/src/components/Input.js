import React from 'react';

class Input extends React.Component {
  render() {
    const { onChange, label, isChecked, isDisabled } = this.props;
    return (
      <label>
        <input type="checkbox" name="checkbox" disabled={isDisabled} checked={isChecked} onChange={onChange} />
        {label}
      </label>
    );
  }
}

export default Input;
