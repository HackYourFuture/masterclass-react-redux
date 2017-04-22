import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import AppContainer from "./containers/AppContainer"
import configureStore from './store'
import reducers from './reducers'
import * as todosActions from './actions/todos'

const store = configureStore(reducers)

render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>
	, document.querySelector('main')
)