const express = require('express')
const json = express.json()

const People = require('./people.service')

const router = express.Router()

router.get('/', async (req, res) => {
	try {
		// Return all the people currently in the queue.
		const people = await People.get()

		if (!people) {
			return res.status(400).send({ error: 'Empty List' })
		}
		res.json(people)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', json, async (req, res) => {
	try {
		const { person } = req.body
		if (!person) {
			return res.status(400).send({ error: 'Invalid' })
		}
		const data = await People.enqueue(person)

		res.status(201).json(data.data)
	} catch (error) {
		console.log(error)
	}
	// Add a new person to the queue.
})

router.delete('/', async (req, res) => {
	try {
		const deleted = await People.dequeue()
		const next = await People.enqueue('Next Person')
		if (!deleted) {
			return res.status(400).send({ error: `Empty List` })
		}
		res.status(204).end()
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
