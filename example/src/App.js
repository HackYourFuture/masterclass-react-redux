import React from 'react'
import TodoList from './components/TodoList'
import {loadTodos, saveTodos} from './persistence'

export default class App extends React.Component {

	state = {
		todos: loadTodos(),
		todoAdded: false
	}

	addTodo() {
		const newTodo = {description: ''}
		this.setState({todoAdded: true})
		this.setTodos([...this.state.todos, newTodo])
	}

	removeTodo(index) {
		const todos = [...this.state.todos]
		todos.splice(index, 1)
		this.setTodos(todos)
	}

	changeTodo(index, description) {
		const todos = [...this.state.todos]
		todos[index].description = description
		this.setTodos(todos)
	}

	setTodos(todos) {
		this.setState({todos})
		saveTodos(todos)
	}

	componentDidUpdate() {
		if (this.state.todoAdded) {
			this.setState({todoAdded: false})
		}
	}

	render() {
		return (
			<div id="app">
				<h1>To do</h1>

				{this.renderList()}

				<div className="buttons">
					{this.renderAddButton()}
				</div>
			</div>
		)
	}

	renderList() {
		return (
			<TodoList
				className="todos"
				todos={this.state.todos}
				focusOnLastTodo={this.state.todoAdded}
				onTodoChange={::this.onTodoChange}
				onAddTodo={::this.onAddTodo}
				onRemoveTodo={::this.onRemoveTodo}
			/>
		)
	}

	renderAddButton() {
		return (
			<button
				className="add-button"
				onClick={::this.onAddClick}
			>
				New todo
			</button>
		)
	}

	onAddClick() {
		this.addTodo()
	}

	onAddTodo() {
		this.addTodo()
	}

	onRemoveTodo(index) {
		this.removeTodo(index)
	}

	onTodoChange(index, description) {
		this.changeTodo(index, description)
	}

}