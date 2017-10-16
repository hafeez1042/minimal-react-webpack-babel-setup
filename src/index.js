import React from 'react';
import {hydrate} from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import Routes from 'Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));
const render = Component => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider >
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('Routes', () => { render(Routes); });
}
