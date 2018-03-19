import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './appReducer';

const RootReducer = combineReducers({
  app,
  router: routerReducer,
});

export default RootReducer;
