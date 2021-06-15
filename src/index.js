import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import './index.scss'
import App from './app/App'

import { store as createStore } from './store/store'
const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
