import { SET_FAVORITE, SET_LOADING, SET_POKEMOS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
  favorite: []
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMOS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex < 0) {
        return state;
      }

      newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;

      return { ...state, pokemons: newPokemonsList }

    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}