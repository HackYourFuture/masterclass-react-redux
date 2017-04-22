import {connect} from 'react-redux';

import App from '../components/App';
import * as todosActions from '../actions/todos'
import * as selectedTodoActions from '../actions/selectedTodoIndex'
import {getSelectedTodo, getTotalDoneTodo, getTotalUnDoneTodo} from '../selectors/todo'

export default connect(
    (state) => ({
        todos: state.todos,
        selectedTodo: getSelectedTodo(state),
        totalDoneTodos: getTotalDoneTodo(state),
        totalNotDoneTodos: getTotalUnDoneTodo(state),
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
    	},
      setDoneStatus: (index, done) => {
        if (done) {
          dispatch(todosActions.doTodo(index))
        } else {
          dispatch(todosActions.undoTodo(index))
        }
      },
      onSelectTodo: (index) => {
        dispatch(selectedTodoActions.setIndex(index))
      }
    })
)(App);
