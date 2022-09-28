import { SET_LOADING, SET_POKEMOS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMOS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}