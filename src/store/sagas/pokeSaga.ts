import {call, put, takeLatest} from 'redux-saga/effects';
import {PokemonListResponse, getPokemonList, PokemonDetail, getPokemonDetail} from '../../api/pokeApi';
import {
    getPokemonListStart,
    getPokemonListSuccess,
    getPokemonListFailure,
    selectPokemonStart, selectPokemonSuccess
} from '../slices/pokeSlice';
import {PayloadAction} from "@reduxjs/toolkit";


function* fetchPokemonList(action: PayloadAction<number>) {
    try {
        const page = action.payload;
        const response: PokemonListResponse = yield call(getPokemonList, {page});
        yield put(getPokemonListSuccess(response.results.map((poke, index) => {
            return {...poke, id: page * 24 + index + 1}
        })));
    } catch (error: any) {
        yield put(getPokemonListFailure(error.message));
    }
}

function* selectPokemon(action: PayloadAction<number>) {
    const id = action.payload
    const response: PokemonDetail = yield call(getPokemonDetail, id);
    yield put(selectPokemonSuccess(response))
}

export function* watchPokeSaga() {
    yield takeLatest(getPokemonListStart.type, fetchPokemonList);
    yield takeLatest(selectPokemonStart.type, selectPokemon);
}
