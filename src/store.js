import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './reducers';

const configureStore = routerMiddleware => (
  createStore(
    RootReducer,
    {},
    composeWithDevTools(applyMiddleware(logger, thunk, promise(), routerMiddleware)),
  )
);

export default configureStore;
