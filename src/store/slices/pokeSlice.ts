import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PokemonDetail} from "../../api/pokeApi";

export interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export interface PokeState {
    selected: PokemonDetail | null;
    pokemonList: Pokemon[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PokeState = {
    selected: null,
    pokemonList: [],
    status: 'idle',
    error: null,
};

const pokeSlice = createSlice({
    name: 'poke',
    initialState,
    reducers: {
        selectPokemonStart(state, action: PayloadAction<number>) {
            state.status = 'loading';
        },
        selectPokemonSuccess(state, action: PayloadAction<PokemonDetail>) {
            state.selected = action.payload;
            state.status = 'succeeded';
        },
        unselectPokemon(state) {
            state.selected = null;
        },
        getPokemonListStart: (state, action: PayloadAction<number>) => {
            state.status = 'loading';
        },
        getPokemonListSuccess: (state, action: PayloadAction<Pokemon[]>) => {
            state.status = 'succeeded';
            state.pokemonList = state.pokemonList.concat(action.payload);
            state.error = null;
        },
        getPokemonListFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const {
    getPokemonListStart,
    getPokemonListSuccess,
    getPokemonListFailure,
    selectPokemonStart,
    selectPokemonSuccess,
    unselectPokemon
} = pokeSlice.actions;

export default pokeSlice;
