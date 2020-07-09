export const CHANGE_POKEMON = 'CHANGE_POKEMON';
export const FILTER_DATA = 'FILTER_DATA';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const VERIFY_FAVORITE = 'VERIFY_FAVORITE';
export const FILTER_FAVORITE = 'FILTER_FAVORITE';
export const DISABLE_FAVORITE = 'DISABLE_FAVORITE';
export const ACTUAL_POKEMON = 'ACTUAL_POKEMON';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';

// alterando a o pokemon exibido
export const changePokemon = () => ({
  type: CHANGE_POKEMON,
});

export const filterData = (nature) => ({
  type: FILTER_DATA,
  nature,
});

export const addFavorite = (id) => ({
  type: ADD_FAVORITE,
  id,
});

export const verifyFavorite = (id) => ({
  type: VERIFY_FAVORITE,
  id,
});

export const filterFavorite = (favorites) => ({
  type: FILTER_FAVORITE,
  favorites,
});

export const disableFavorite = () => ({
  type: DISABLE_FAVORITE,
});

export const actualPokemon = (id) => ({
  type: ACTUAL_POKEMON,
  id,
});

// export const request_API = () => ({
//   type: REQUEST_API,
// })

// export const requestAPI_Success = () => ({
//   type: REQUEST_API_SUCCESS,
// })
