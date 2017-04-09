import React from 'react'
import {shape, string, func} from 'prop-types'

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

}

TodoListItem.propTypes = {
	todo: shape({
		description: string.isRequired
	}).isRequired,

	onDescriptionChange: func,
	onRemove:            func,
	onEnterPressed:      func
}
TodoListItem.defaultProps = {
	onDescriptionChange: () => undefined,
	onRemove:            () => undefined,
	onEnterPressed:      () => undefined
}