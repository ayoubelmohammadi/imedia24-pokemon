import {combineReducers} from 'redux';
import PokeSlice from "./pokeSlice";

const rootReducer = combineReducers({
    poke: PokeSlice.reducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
