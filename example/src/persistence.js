export function loadTodos() {
	const json = window.localStorage.todos
	if (json == null) { return [] }

	return JSON.parse(json)
}

export function saveTodos(todos) {
	window.localStorage.todos = JSON.stringify(todos)
}