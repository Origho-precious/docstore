import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

import reducers from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const domain = 'dev-6b5u1vac.us.auth0.com';
const clientId = 'ZmBrDHdDawvHrNhPQGMU0uZ2xDS02Tqr';

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);

