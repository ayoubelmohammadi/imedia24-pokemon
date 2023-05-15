import {combineReducers} from 'redux';
import PokeSlice from "./pokeSlice";

const rootReducer = combineReducers({
    poke: PokeSlice
});
export default rootReducer;
