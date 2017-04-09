import React from 'react'
import {arrayOf, shape, string, func, bool} from 'prop-types'

export default class App extends React.Component {

	static propTypes = {
		todos: arrayOf(shape({
			description: string.isRequired,
		})),
		focusOnLastTodo: bool,
		onTodoChange: func,
		onAddTodo: func,
		onRemoveTodo: func
	}
	static defaultProps = {
		todos:           [],
		focusOnLastTodo: false,
		onTodoChange:    () => void 0,
		onAddTodo:       () => void 0,
		onRemoveTodo:    () => void 0
	}

	inputs = new Map()

	componentDidUpdate() {
		if (this.props.focusOnLastTodo) {
			this.focusOnLastTodo()
		}
	}

	focusOnLastTodo() {
		const inputs = Array.from(this.inputs.values())
		if (inputs.length === 0) { return }

		const lastInput = inputs[inputs.length - 1]
		setTimeout(::lastInput.focus, 0)
	}

	render() {
		const {todos} = this.props

		this.inputs = new Map()

		return (
			<ul className="todo-list">
				{todos.length === 0 && this.renderEmpty()}
				{todos.map(this.renderTodo.bind(this))}
			</ul>
		)
	}

	renderEmpty() {
		return (
			<div className="todo-list--empty">
				You have nothing to do. Yay!
			</div>
		)
	}

	renderTodo(todo, index) {
		return (
			<li key={index} className="todo-list--item">
				<input
					ref={el => { this.inputs.set(index, el) }}
					value={todo.description}
					onChange={this.onTodoChange.bind(this, index)}
					onKeyPress={this.onTodoKeyPress.bind(this, index)}
				/>
				<button
					className="todo-list--item--remove-button"
					onClick={this.onTodoRemoveClick.bind(this, index)}
				>
					&times;
				</button>
			</li>
		)
	}

	onTodoChange(index, e) {
		this.props.onTodoChange(index, e.target.value)
	}

	onTodoKeyPress(index, e) {
		if (e.which !== 13) { return }
		e.preventDefault()

		if (index < this.props.todos.length - 1) {
			this.inputs.get(index + 1).focus()
		} else {
			this.props.onAddTodo()
		}
	}

	onTodoRemoveClick(index) {
		this.props.onRemoveTodo(index)
	}

}