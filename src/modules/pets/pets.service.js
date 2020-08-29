const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
	cats: new Queue(),
	dogs: new Queue(),
}

store.cats.forEach((cat) => pets.cats.enqueue(cat))
store.dogs.forEach((dog) => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
	get() {
		// Return the pets next in line to be adopted.
		if (pets.cats && pets.dogs) {
			return {
				'Next Cat': pets.cats.first
					? pets.cats.first.data
					: null,
				'Next Dog': pets.dogs.first
					? pets.dogs.first.data
					: null,
			}
		} else {
			return null
		}
	},

	dequeue(type) {
		// Remove a pet from the queue.
		if (type === 'dogs') {
			return pets.dogs.dequeue()
		} else if (type === 'cats') {
			return pets.cats.dequeue()
		} else {
			return null
		}
	},
}
