class Pet {
	constructor(data) {
		this.data = data
	}
}

class Queue {
	constructor() {
		// Set initial data.
		this.first = null
		this.last = null
	}

	enqueue(data) {
		// Add some data to the queue.
		const node = new Pet(data)
		if (!this.first) {
			node.next = this.first
			this.first = node
			this.last = node
		}
		if (this.last) {
			this.last.next = node
			this.last = node
		}
	}

	dequeue() {
		// Remove some data from the queue.
		if (!this.first) return
		const node = this.first
		this.first = this.first.next
		if (node === this.last) {
			this.last = null
		}
		return node.data
	}

	show() {
		// Return the next item in the queue.
		if (!this.first) return null
		const nextPet = this.first.next
		return nextPet.data
	}

	all() {
		// Return all items in the queue.
		if (!this.first) return null
		let temp = this.first
		let list = []
		while (temp) {
			list.push(temp.data)
			temp = temp.next
		}
		return list
	}
}

module.exports = Queue
