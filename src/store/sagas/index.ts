import {all} from 'redux-saga/effects';
import {watchPokeSaga} from "./pokeSaga";

export default function* rootSaga() {
    yield all([
        watchPokeSaga()
    ]);
}
