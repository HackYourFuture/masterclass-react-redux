import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(rootReducer) {
  const store = createStore(
  	rootReducer,
  	applyMiddleware(logger, thunk),
  	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store;
}
