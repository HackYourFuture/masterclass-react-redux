export const todos = {
	fetchAll() {
		return new Promise(function(resolve, reject) {
			setTimeout(() => {
				resolve(mock)
				// reject('pfff api is crap')
			}, 1500)
		});
	}
}

const mock = [
	{description: 'buy bread', done: false},
	{description: 'read', done: false},
	{description: 'go to the beach', done: false},
	{description: 'breath', done: false}
]
