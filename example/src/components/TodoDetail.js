import React from 'react'
import {shape, string, func} from 'prop-types'

export default class TodoDetail extends React.Component {

	render() {
		if (!this.props.todo) return null
		if (this.props.todo.description == '') return null

		return (
			<div>
			<h2>Selected Todo</h2>
				description: {this.props.todo.description}
				<br/>
				done: {this.props.todo.done ? 'yes' : 'no'}
			</div>
		)
	}
}

TodoDetail.propTypes = {
	todo: shape({
		description: string.isRequired
	}),
}
