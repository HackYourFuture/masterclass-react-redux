import * as actions from '../actions/todos'

const initialState = []

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actions.ADD_TODO:
      return addTodo(state, action)
    case actions.REMOVE_TODO:
      return removeTodo(state, action)
    case actions.CHANGE_TODO:
      return changeTodo(state, action)
    case actions.DO_TODO:
      return doTodo(state, action)
    case actions.UNDO_TODO:
      return undoTodo(state, action)
    default:
      return state
  }
}

const addTodo = (state, action) => [...state, action.todo]
const removeTodo = (state, action) => state.filter((todo, index) => index != action.index)
const changeTodo = (state, action) => state.map((todo, index) => {
  if (index == action.index) {
    todo.description = action.description
  }
  return todo
})

const doTodo = (state, action) => state.map((todo, index) => {
  if (index == action.index) {
    todo.done = true;
  }
  return todo
})

const undoTodo = (state, action) => state.map((todo, index) => {
  if (index == action.index) {
    todo.done = false;
  }
  return todo
})
