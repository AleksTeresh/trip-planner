// @flow

import { createHashHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as reducers from './reducer'
import { tripSaga } from './sagas'

const hashHistory = createHashHistory()
const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  routerMiddleware(hashHistory),
  sagaMiddleware
)

const hasDevTools = process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
  connectRouter(hashHistory)(combineReducers({ ...reducers })),
  hasDevTools
    ? compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
    : middleware
)

sagaMiddleware.run(tripSaga)

export { store, hashHistory }
