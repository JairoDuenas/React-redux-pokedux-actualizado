import { SET_POKEMOS } from "../actions/types";

const initialState = {
  pokemons: []
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMOS:
      return { ...state, pokemons: action.payload };
  
    default:
      return state;
  }
}