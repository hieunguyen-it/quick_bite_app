import {configureStore, combineReducers} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';
import commonSlice from './reducers/commonSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const rootReducer: any = combineReducers({
  commonSlice,
});

interface PersistConfig {
  key: string;
  storage: AsyncStorageStatic;
  whitelist: Array<string>;
}

const persistConfig: PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['commonSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export {store, persistor};
