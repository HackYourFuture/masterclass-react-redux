import React from 'react'
import propTypes from 'prop-types'
import TodoList from './TodoList'

export default class App extends React.Component {

	constructor() {
		super()
	}

	addTodo() {
		const newTodo = {description: ''}
		this.props.onAddTodo(newTodo)
	}

	removeTodo(index) {
		this.props.onRemoveTodo(index)
	}

	changeTodo(index, description) {
		this.props.onChangeTodo(index, description)
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
				todos={this.props.todos}
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

App.propTypes = {
	todos: propTypes.arrayOf(propTypes.shape({
		description: propTypes.string.isRequired,
	})),
	onAddTodo: propTypes.func.isRequired,
	onRemoveTodo: propTypes.func.isRequired,
	onChangeTodo: propTypes.func.isRequired,
}