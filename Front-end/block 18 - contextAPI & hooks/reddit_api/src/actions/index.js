import fetchAPI from '../services/fetchAPI';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';

export const handleChange = (value) => ({
  type: INPUT_CHANGE,
  value,
});

const requestAPI = () => ({
  type: REQUEST_API,
});

const requestSUCCESS = (data) => ({
  type: REQUEST_API_SUCCESS,
  data: data.map((d) => d.data),
});

const requestFAILURE = (error) => ({
  type: REQUEST_API_FAILURE,
  error,
});

export const getAPI = (search) => {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetchAPI(search).then(
      (json) => dispatch(requestSUCCESS(json.data.children)),
      (error) => dispatch(requestFAILURE(error.message))
    );
  };
};
