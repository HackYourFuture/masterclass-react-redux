import React from 'react'
import propTypes from 'prop-types'
import TodoList from './TodoList'
import TodoDetail from './TodoDetail'
import Stats from './Stats';

export default class App extends React.Component {

	addTodo() {
		const newTodo = {description: '', done: false}
		this.props.onAddTodo(newTodo)
	}

	removeTodo(index) {
		this.props.onRemoveTodo(index)
	}

	changeTodo(index, description) {
		this.props.onChangeTodo(index, description)
	}

	render() {
		const {todos, totalDoneTodos, totalNotDoneTodos} = this.props

		if (todos.loading) {
			return <div>Loading todos</div>
		} else if (todos.error) {
			return <div>Error loading todos: {todos.error}</div>
		} else {
			return (
				<div id="app">
					<h1>To do</h1>

					<Stats data={{
						'total': todos.list.length,
						'done': totalDoneTodos,
						'not done': totalNotDoneTodos
					}} />

					{this.renderTodoList()}

					<div className="app--buttons">
						{this.renderAddButton()}
					</div>

					<TodoDetail todo={this.props.selectedTodo}/>
				</div>
			)
		}
	}

	renderTodoList() {
		return (
			<TodoList
				todos={this.props.todos.list}
				onTodoChange={(index, description) => this.onTodoChange(index, description)}
				onTodoRemove={(index) => this.onTodoRemove(index)}
				onAddTodo={::this.onAddTodo}
				onSelectTodo={this.props.onSelectTodo}
				setDoneStatus={this.props.setDoneStatus}
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
		done: propTypes.bool.isRequired,
	})),
	selectedTodo: propTypes.shape({
		description: propTypes.string.isRequired,
	}),
	onAddTodo: propTypes.func.isRequired,
	onRemoveTodo: propTypes.func.isRequired,
	onChangeTodo: propTypes.func.isRequired,
	onSelectTodo: propTypes.func.isRequired,
	setDoneStatus: propTypes.func.isRequired,
}
