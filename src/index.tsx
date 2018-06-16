import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ThemeProvider } from 'react-jss';
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push,
  } from 'react-router-redux';
import theme from './theme';

import Home from './components/Home';

interface IWindow {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
}
const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' && (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(middleware),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Route path={'/'} component={Home} />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('demo'),
);
