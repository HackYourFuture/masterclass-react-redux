import React from 'react'
import propTypes from 'prop-types'

export default class Stats extends React.Component {

	render() {
		const data = this.props.data

		return (
			<div>
			<h3>Stats</h3>
				{data && Object.keys(data).map(::this.renderStat)}
			</div>
		)
	}

	renderStat(key, index) {
		return <span key={'stat-' + index}>{key}: {this.props.data[key]} </span>
	}
}

Stats.propTypes = {
	data:propTypes.object,
}

Stats.defaultProps = {
	data: {},
}
