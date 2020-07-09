import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleChange, getAPI } from '../actions';

const Header = (props) => {
  const { handleChange, getAPI, value } = props;
  return (
    <header>
      <input onChange={(e) => handleChange(e.target.value)} />
      <button onClick={() => getAPI(value)}>pesquisar</button>
    </header>
  );
};

const mapState = (state) => ({
  value: state.reducer.value,
});

const mapDispatch = (dispatch) => ({
  handleChange: (value) => dispatch(handleChange(value)),
  getAPI: (search) => dispatch(getAPI(search)),
});

export default connect(mapState, mapDispatch)(Header);
