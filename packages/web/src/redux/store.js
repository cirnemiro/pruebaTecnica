import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

const persistConfig = {
    key: 'giff-project-client',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];


const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export default store;
