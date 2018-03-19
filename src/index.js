import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import './index.css';
import configureStore from './store';
import RouterAdmin from './containers';

const history = createHistory();
const middleware = routerMiddleware(history);
const Store = configureStore(middleware);

render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <div>
        <RouterAdmin />
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'),
);
