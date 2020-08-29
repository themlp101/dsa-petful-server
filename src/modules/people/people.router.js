const express = require('express')
const json = express.json()

const People = require('./people.service')

const router = express.Router()

router.get('/', async (req, res) => {
	// Return all the people currently in the queue.
	const people = await People.get()
	res.json(people)
})

router.post('/', json, (req, res) => {
	// Add a new person to the queue.
	const { person } = req.body
	if (!person) {
		res.send({ error: 'Invalid' })
	}
	People.enqueue(person)
	res.sendStatus(201)
})

router.delete('/', async (req, res, next) => {
	try {
		const deleted = await People.dequeue()
		if (!deleted) {
			res.send('Empty')
		}

		res.sendStatus(204)
	} catch (error) {
		next(error)
	}
})

module.exports = router
