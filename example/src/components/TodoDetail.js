import React from 'react'
import {shape, string, func} from 'prop-types'

export default class TodoDetail extends React.Component {

	render() {
		if (!this.props.todo) return null

		return (
			<div>
				{this.props.todo.description}
			</div>
		)
	}
}

TodoDetail.propTypes = {
	todo: shape({
		description: string.isRequired
	}),
}