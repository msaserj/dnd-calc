import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { calcReducer } from './calc-reducer';

export const rootReducer = combineReducers({
  calcReducer: calcReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export type AppDispatchType = typeof store.dispatch;
export type AppStateType = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;

export type RootReducerType = typeof rootReducer;

export type AppRootStateType = ReturnType<RootReducerType>;
