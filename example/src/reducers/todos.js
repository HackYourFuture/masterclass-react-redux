import * as actions from '../actions/todos'

const initialState = {
  loading: false,
  error: null,
  list: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actions.FETCH_TODOS_START:
      return fetchTodoStart(state, action)
    case actions.FETCH_TODOS_SUCCESS:
      return fetchTodosSuccess(state, action)
    case actions.FETCH_TODOS_ERROR:
      return fetchTodosError(state, action)
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

const fetchTodoStart = (state, action) => (Object.assign({}, state, {
  loading: true,
  error: null,
  list: [...state.list],
}))

const fetchTodosSuccess = (state, action) => (Object.assign({}, state, {
  loading: false,
  error: null,
  list: action.todos,
}))

const fetchTodosError = (state, action) => (Object.assign({}, state, {
  loading: false,
  error: action.error,
  list: [],
}))

const addTodo = (state, action) => (Object.assign({}, state, {
  loading: false,
  error: action.error,
  list: [...state.list, action.todo],
}))

const removeTodo = (state, action) => (Object.assign({}, state, {
  loading: false,
  error: action.error,
  list: state.list.filter((todo, index) => index != action.index),
}))

const changeTodo = (state, action) => (Object.assign({}, state, {
  loading: false,
  error: action.error,
  list: state.list.map((todo, index) => {
    if (index == action.index) {
      todo.description = action.description
    }
    return todo
  }),
}))

const doTodo = (state, action) => (Object.assign({}, state, {
  loading: false,
  error: action.error,
  list: state.list.map((todo, index) => {
    if (index == action.index) {
      todo.done = true;
    }
    return todo
  })
}))

const undoTodo = (state, action) => (Object.assign({}, state, {
  loading: false,
  error: action.error,
  list: state.list.map((todo, index) => {
    if (index == action.index) {
      todo.done = false;
    }
    return todo
  })
}))
