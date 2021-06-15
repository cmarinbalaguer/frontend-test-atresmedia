import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import reducer from './reducers/index';

import { store as createStore } from './store/store'

function render(
  ui,
  {
    initialState,
    store = createStore({
      reducer,
      preloadedState: initialState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};


export * from '@testing-library/react';

export { render };
