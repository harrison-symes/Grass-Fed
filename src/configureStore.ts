import { baseReducers, reducers, rootInitialState } from './reducers'


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createReduxHistoryContext } from 'redux-first-history';
import { BrowserHistory } from "history"

export const createStore = (history: BrowserHistory) => {
    const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
        history,
        reduxTravelling: true,
        showHistoryAction: true
    })

    const store = configureStore({
        devTools: true,
        reducer: combineReducers({
            ...baseReducers(routerReducer),
            ...reducers
        }),
        middleware: [routerMiddleware],
        preloadedState: rootInitialState
    })

    createReduxHistory(store)

    return store
}
