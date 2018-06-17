import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ThemeProvider } from 'react-jss';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push,
} from 'react-router-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import ja from 'react-intl/locale-data/ja';
import theme from './theme';
import rootSaga from './sagas';
import { productListReducer } from './modules/product_list/reducer';
import { productReducer } from './modules/products/reducer';

import Home from './components/Home';
import ItemDetail from './components/ItemDetail';

addLocaleData([...ja]);

interface IWindow {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}
const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' && (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  combineReducers({
    router: routerReducer,
    productList: productListReducer,
    products: productReducer,
  }),
  composeEnhancers(
    applyMiddleware(middleware, sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <IntlProvider locale={'ja'}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Route path={'/'} component={Home} />
          <Route path={'/items/:id'} component={ItemDetail} />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById('demo'),
);
