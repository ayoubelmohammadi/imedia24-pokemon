import {configureStore, PreloadedState} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './slices';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();


export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
    })
};

const store = setupStore()
sagaMiddleware.run(rootSaga);

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>;
export default store;