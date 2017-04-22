import React from 'react'
import {shape, string, func, bool} from 'prop-types'

export default class TodoListItem extends React.Component {

	componentDidMount() {
		this.focusInput()
	}

	focusInput() {
		this.refs.input.focus()
	}

	render() {
		return (
			<li className="todo-list--item">
				{this.renderInput()}
				{this.renderRemoveButton()}
				{this.renderDoneToggleButton()}
			</li>
		)
	}

	renderInput() {
		const todo = this.props.todo

		return (
			<input
				ref="input"
				value={todo.description}
				onChange={::this.onDescriptionChange}
				onKeyPress={::this.onDescriptionKeyPress}
				onFocus={this.props.onFocus}
			/>
		)
	}

	renderRemoveButton() {
		return (
			<button className="todo-list--item--remove-button" onClick={::this.onRemoveClick}>
				&times;
			</button>
		)
	}

	renderDoneToggleButton() {
		return (
			<button onClick={::this.onToggleDone}>
				{this.props.todo.done ? 'done': 'not done'}
			</button>
		)
	}

	onDescriptionChange(evt) {
		this.props.onDescriptionChange(evt.target.value)
	}

	onDescriptionKeyPress(evt) {
		if (evt.which !== 13) { return }

		evt.preventDefault()
		this.props.onEnterPressed()
	}

	onRemoveClick() {
		this.props.onRemove()
	}

	onToggleDone() {
		this.props.setDoneStatus(!this.props.todo.done)
	}
}

TodoListItem.propTypes = {
	todo: shape({
		description: string.isRequired,
		done: bool.isRequired,
	}).isRequired,

	onDescriptionChange: func,
	onRemove:            func,
	onEnterPressed:      func,
	onFocus:				 		 func,
	setDoneStatus:			 func,
}
TodoListItem.defaultProps = {
	onDescriptionChange: () => undefined,
	onRemove:            () => undefined,
	onEnterPressed:      () => undefined,
	onFocus:     			 	 () => undefined,
	setDoneStatus:     	 () => undefined,
}
