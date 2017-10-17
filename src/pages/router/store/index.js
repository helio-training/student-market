import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import routerItems from '../router'

export default createStore(
    combineReducers({
        products: (state, action) => ({}),
        router: routerItems.reducer
    }),
    compose(
        routerItems.enhancer,
        applyMiddleware(routerItems.middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)