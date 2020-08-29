const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/dog', async (req, res) => {
	// Return all pets currently up for adoption.
	try {
		const nextDog = await Pets.get()['Next Dog']
		if (!nextDog) {
			return res.status(400).send({ error: 'No dogs found' })
		}
		res.json(nextDog)
	} catch (error) {
		console.log(error)
	}
})

router.delete('/dog', json, async (req, res) => {
	// Remove a pet from adoption.
	try {
		await Pets.dequeue('dogs')

		res.sendStatus(204)
	} catch (error) {
		console.log(error)
	}
})

router.get('/cat', async (req, res) => {
	try {
		const nextCat = await Pets.get()['Next Cat']
		if (!nextCat) {
			return res.status(400).send({ error: 'No cats found' })
		}
		res.json(nextCat)
	} catch (error) {
		console.log(error)
	}
})
router.delete('/cat', json, async (req, res) => {
	//
	try {
		await Pets.dequeue('cats')

		res.sendStatus(204)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
