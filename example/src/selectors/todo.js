export const getSelectedTodo = (state) => state.todos[state.selectedTodoIndex]
export const getTotalDoneTodo = (state) => state.todos.filter((todo) => todo.done).length
export const getTotalUnDoneTodo = (state) => state.todos.length - getTotalDoneTodo(state)
