export const CHANGE_POKEMON = 'CHANGE_POKEMON';
export const FILTER_DATA = 'FILTER_DATA';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const VERIFY_FAVORITE = 'VERIFY_FAVORITE';
export const FILTER_FAVORITE = 'FILTER_FAVORITE';
export const DISABLE_FAVORITE = 'DISABLE_FAVORITE';

// alterando a o pokemon exibido
export const changePokemon = (actualId) => ({
  type: CHANGE_POKEMON,
  actualId,
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
