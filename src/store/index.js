/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'localforage'

import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  login: loginReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const persistor = persistStore(store)

export {
  store,
  persistor,
}
