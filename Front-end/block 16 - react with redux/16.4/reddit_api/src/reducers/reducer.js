import {
  INPUT_CHANGE,
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILURE,
} from '../actions';

const INITAL_STATE = {
  value: 'reactjs',
  loading: false,
};

const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, value: action.value };
    case REQUEST_API:
      return { ...state, loading: true };
    case REQUEST_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_API_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
