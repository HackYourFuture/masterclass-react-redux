import React from 'react'
import propTypes from 'prop-types'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component {

	componentDidUpdate() {
		if (this.props.focusOnLastTodo) {
			this.focusOnLastInput()
		}
	}

	focusOnLastInput() {
		if (this.props.todos.length === 0) { return }

		const lastTodoIndex = this.props.todos.length - 1
		const lastInput = this.refs[`input-${lastTodoIndex}`]
		if (lastInput == null) { return }

		lastInput.focus()
	}

	render() {
		const todos = this.props.todos

		return (
			<ul className="todo-list">
				{todos.length === 0 ?
					this.renderEmpty() :
					todos.map(::this.renderTodo)
				}
			</ul>
		)
	}

	renderEmpty() {
		return (
			<div className="todo-list--empty">
				You have no to-do items. Yay!!
			</div>
		)
	}

	renderTodo(todo, index) {
		return (
			<TodoListItem
				key={index}
				ref={`todo-${index}`}
				todo={todo}
				onDescriptionChange={this.onTodoChange.bind(this, index)}
				onRemove={this.onTodoRemove.bind(this, index)}
				onEnterPressed={this.onTodoEnterPressed.bind(this, index)}
			/>
		)
	}

	onTodoChange(index, description) {
		this.props.onTodoChange(index, description)
	}

	onTodoRemove(index) {
		this.props.onTodoRemove(index)
	}

	onTodoEnterPressed(index) {
		if (index < this.props.todos.length - 1) {
			this.refs[`todo-${index + 1}`].focusInput()
		} else {
			this.props.onAddTodo()
		}
	}

}

const emptyFunction = () => undefined

TodoList.propTypes = {
	todos: propTypes.arrayOf(propTypes.shape({
		description: propTypes.string.isRequired
	})),
	focusOnLastTodo: propTypes.bool,

	onTodoChange: propTypes.func,
	onTodoRemove: propTypes.func,
	onAddTodo:    propTypes.func
}

TodoList.defaultProps = {
	todos: [],
	focusOnLastTodo: false,

	onTodoChange: emptyFunction,
	onTodoRemove: emptyFunction,
	onAddTodo:    emptyFunction
}