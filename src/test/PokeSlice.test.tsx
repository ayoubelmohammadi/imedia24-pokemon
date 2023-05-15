// src/store/slices/__tests__/pokeSlice.test.ts

import pokeSlice, {
    getPokemonListStart,
    getPokemonListSuccess,
    getPokemonListFailure,
    selectPokemonStart,
    selectPokemonSuccess,
} from '../store/slices/pokeSlice';

describe('pokeSlice reducer', () => {
    it('should handle initial state', () => {
        expect(pokeSlice(undefined, {type: 'unknown'})).toEqual({
            selected: null,
            pokemonList: [],
            status: 'idle',
            error: null,
        });
    });

    it('should handle getPokemonListStart', () => {
        const action = {
            type: getPokemonListStart.type,
            payload: 1
        };
        const state = pokeSlice(undefined, action);
        expect(state.status).toBe('loading');
    });

    it('should handle getPokemonListSuccess', () => {
        const action = {
            type: getPokemonListSuccess.type,
            payload: [{name: 'Pikachu', url: 'http://...', id: 1}],
        };
        const state = pokeSlice(undefined, action);
        expect(state.status).toBe('succeeded');
        expect(state.pokemonList.length).toBe(1);
        expect(state.pokemonList[0].name).toBe('Pikachu');
    });

    it('should handle getPokemonListFailure', () => {
        const action = {
            type: getPokemonListFailure.type,
            payload: 'Error message',
        };
        const state = pokeSlice(undefined, action);
        expect(state.status).toBe('failed');
        expect(state.error).toBe('Error message');
    });

    // Similar tests for selectPokemonStart and selectPokemonSuccess
});

