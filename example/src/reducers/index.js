import {combineReducers} from 'redux';

import todos from './todos';
import selectedTodoIndex from './selectedTodoIndex';

export default combineReducers({
  todos,
  selectedTodoIndex
});