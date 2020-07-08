import {
  CHANGE_POKEMON,
  FILTER_DATA,
  ADD_FAVORITE,
  FILTER_FAVORITE,
  DISABLE_FAVORITE,
  ACTUAL_POKEMON,
  request_API,
  REQUEST_API,
  REQUEST_API_SUCCESS,
} from '../actions';
import pokemons from '../data';
import { filterItem, addRemoveFav, showFavorites } from './utility';
import { getLocal } from '../service/localStorage';

const INITAL_STATE = {
  data: pokemons,
  selected: 0,
  favorites: getLocal('favorites') || [],
  checkbox: false,
  loading: false,
};

const interactions = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_POKEMON:
      return { ...state, selected: state.selected + 1, id: action.actualId };
    case FILTER_DATA:
      return filterItem(state, action, action.nature);
    case ADD_FAVORITE:
      return addRemoveFav(state, action);
    case FILTER_FAVORITE:
      return showFavorites(state, action);
    case DISABLE_FAVORITE:
      return { ...state, checkbox: false };
    case ACTUAL_POKEMON:
      const actual = pokemons.filter((p) => p.id == action.id);
      return { ...state, actual: actual[0] };
    // case REQUEST_API:
    //   return { ...state, loading: true };
    // case REQUEST_API_SUCCESS:
    //   return { ...state, loading: false };
    default:
      return state;
  }
};

export default interactions;
