import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = () => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
