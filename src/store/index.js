import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { dummy } from 'ducks'

const persistConfig = {
  key: 'root',
  storage
}

export const reducers = {
  dummy
}

const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistedStore = persistStore(store)
