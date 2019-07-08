import 'react-app-polyfill/ie11';
import React from 'react';
import { render } from 'react-dom'
import App from "./views/App"
import { Provider } from 'react-redux';
import store from './redux/store'

const importedStore = store;

render(
  <Provider store={importedStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
