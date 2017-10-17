import { routerForBrowser } from 'redux-little-router'

const routes = {
    '/': {
        title: 'Root'
    },
    '/products': {
        title: 'Product List',
        './': {
            title: 'Product Show'
        }
    },
    './cart': {
        title: 'Shopping Cart'
    }
}

const { reducer, middleware, enhancer } = routerForBrowser({ routes })

export default {
    reducer,
    middleware,
    enhancer
}