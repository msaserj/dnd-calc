import {combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import {calcReducer} from "./calc-reducer";

export const rootReducer = combineReducers({
    calcReducer: calcReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }).prepend(thunkMiddleware)
});

export type AppDispatchType = typeof store.dispatch
export type AppStateType = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>

export type RootReducerType = typeof rootReducer

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>

export type AppRootStateType = ReturnType<RootReducerType>