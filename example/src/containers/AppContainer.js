import { connect } from 'react-redux';

import App from '../components/App';
import * as todosActions from '../actions/todos'
import {getSelectedTodo} from '../selectors/todo'

export default connect(
    (state) => ({
        todos: state.todos,
        selectedTodo: getSelectedTodo(state),
    }),
    (dispatch) => ({
    	onAddTodo: (todo) => {
    		dispatch(todosActions.addTodo(todo))
    	},
    	onRemoveTodo: (index) => {
    		dispatch(todosActions.removeTodo(index))
    	},
    	onChangeTodo: (index, description) => {
    		dispatch(todosActions.changeTodo(index, description))
    	}
    })
)(App);