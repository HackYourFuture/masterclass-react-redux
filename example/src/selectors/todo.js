export const getSelectedTodo = (state) => state.todos.list[state.selectedTodoIndex]
export const getTotalDoneTodo = (state) => state.todos.list.filter((todo) => todo.done).length
export const getTotalUnDoneTodo = (state) => state.todos.list.length - getTotalDoneTodo(state)
