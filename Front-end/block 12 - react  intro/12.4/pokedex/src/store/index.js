import { createStore } from 'redux';
import rootCombiner from '../reducers';

const store = createStore(
  rootCombiner,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
