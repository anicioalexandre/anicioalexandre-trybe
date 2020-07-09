import { setLocal, removeLocal } from '../service/localStorage';
import pokemons from '../data';

const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};

// mudando a data e salvando no localStorage de acordo com o tipo de pokemon
export const filterItem = (state, action, nature) => {
  if (nature) {
    setLocal('nature', action.nature);
    const filteredData = pokemons.filter((p) => p.type === action.nature);
    return updateObject(state, { data: filteredData, checkbox: false });
  } else {
    removeLocal('nature');
    return updateObject(state, { data: pokemons });
  }
};

// adicionando ou removendo id's dos pokemons favoritos
export const addRemoveFav = (state, action) => {
  let filteredData = [];
  if (state.favorites.includes(action.id))
    filteredData = state.favorites.filter((id) => id !== action.id);
  else filteredData = state.favorites.concat(action.id);
  setLocal('favorites', [...filteredData]);
  return updateObject(state, { favorites: filteredData });
};

// alterando a data mostrada quando se ativa ou desativa o check de pokemons favoritos
export const showFavorites = (state, action) => {
  if (!state.checkbox) {
    const filteredData = pokemons.filter((pokemon) =>
      action.favorites.includes(pokemon.id)
    );
    return updateObject(state, { data: filteredData, checkbox: true });
  }
  return updateObject(state, { data: pokemons, checkbox: false });
};
