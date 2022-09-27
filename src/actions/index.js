import { SET_POKEMOS } from "./types";
import { getPokemonDetails } from "../api";

export const setPokemons = (payload) => ({
  type: SET_POKEMOS,
  payload
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
  const pokemonsDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );
  dispatch(setPokemons(pokemonsDetailed))
}
