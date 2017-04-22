import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

export default function configureStore(rootReducer) {
  const store = createStore(
  	rootReducer,
  	applyMiddleware(logger),
  	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store;
}
