// reducers.js
import { Reducer, StateFromReducersMapObject, combineReducers } from 'redux'
import { createBrowserHistory } from 'history'
import { RouterState } from 'redux-first-history';

export const baseReducers = (router: Reducer<RouterState>) => ({
    router,
})

export type TBaseReducers = ReturnType<typeof baseReducers>;

// @ts-ignore
interface IBaseState extends StateFromReducersMapObject<TBaseReducers> {
    router?: RouterState
}

export const baseInitialState: IBaseState = {}

export const reducers = {
}

export type TAppState = StateFromReducersMapObject<typeof reducers>
export type TStoreState = TAppState & IBaseState

export const rootInitialState: TStoreState = {
    ...baseInitialState,
}