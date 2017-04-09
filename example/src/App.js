import React from 'react'
import TodoList from './components/TodoList'
import {loadTodos, saveTodos} from './persistence'

export default class App extends React.Component {

	constructor() {
		super()

		this.state = {
			todos: loadTodos()
		}
	}

	addTodo() {
		const newTodo = {description: ''}
		const todos = [...this.state.todos, newTodo]
		this.setTodos(todos)
	}

	removeTodo(index) {
		const todos = JSON.parse(JSON.stringify(this.state.todos))
		todos.splice(index, 1)
		this.setTodos(todos)
	}

	changeTodo(index, description) {
		const todos = JSON.parse(JSON.stringify(this.state.todos))
		todos[index].description = description
		this.setTodos(todos)
	}

	setTodos(todos) {
		saveTodos(todos)
		this.setState({todos})
	}

	render() {
		return (
			<div id="app">
				<h1>To do</h1>

				{this.renderTodoList()}

				<div className="app--buttons">
					{this.renderAddButton()}
				</div>
			</div>
		)
	}

	renderTodoList() {
		return (
			<TodoList
				todos={this.state.todos}
				onTodoChange={(index, description) => this.onTodoChange(index, description)}
				onTodoRemove={(index) => this.onTodoRemove(index)}
				onAddTodo={::this.onAddTodo}
			/>
		)
	}

	renderAddButton() {
		return (
			<button
				className="app--add-button"
				onClick={::this.onAddClick}
			>
				New todo item
			</button>
		)
	}

	onTodoChange(index, description) {
		this.changeTodo(index, description)
	}

	onAddClick() {
		this.addTodo()
	}

	onAddTodo() {
		this.addTodo()
	}

	onTodoRemove(index) {
		this.removeTodo(index)
	}

}