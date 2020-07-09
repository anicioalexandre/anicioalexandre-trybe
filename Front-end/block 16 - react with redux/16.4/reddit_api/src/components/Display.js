import React from 'react';
import '../App.css';
import Card from './Cards';
import { connect } from 'react-redux';

const Display = ({ data, loading, error }) => {
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (data) return data.map((child) => <Card data={child} />);
  return <h2>Digite sua pesquisa</h2>;
};

const mapState = (state) => ({
  data: state.reducer.data,
  loading: state.reducer.loading,
  error: state.reducer.error,
});

export default connect(mapState)(Display);
