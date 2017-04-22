export const PREFIX = 'TODOS_';
export const ADD_TODO = PREFIX + 'ADD_TODO';
export const REMOVE_TODO = PREFIX + 'REMOVE_TODO';
export const CHANGE_TODO = PREFIX + 'CHANGE_TODO';


export const addTodo = (todo) => ({type: ADD_TODO, todo})
export const removeTodo = (index) => ({type: REMOVE_TODO, index})
export const changeTodo = (index, description) => ({type: CHANGE_TODO, index, description})