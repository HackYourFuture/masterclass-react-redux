import * as actions from '../actions/selectedTodoIndex'

const initialState = null

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actions.SET_INDEX:
    	return action.index
    default:
      return state
  }
}