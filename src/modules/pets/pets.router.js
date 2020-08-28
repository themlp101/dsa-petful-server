const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/dog', async (req, res, next) => {
	// Return all pets currently up for adoption.
	try {
		const nextDog = await Pets.get()['Next Dog']
		if (!nextDog) {
			res.send({ error: 'No dogs found' })
		}
		res.json(nextDog)
	} catch (error) {
		next(error)
	}
})

router.delete('/dog', json, (req, res) => {
	// Remove a pet from adoption.
	res.json(Pets.dequeue('dogs'))
})

router.get('/cat', async (req, res, next) => {
	try {
		const nextCat = await Pets.get()['Next Cat']
		if (!nextCat) {
			res.send({ error: 'No cats found' })
		}
		res.json(nextCat)
	} catch (error) {
		next(error)
	}
})
router.delete('/cat', json, (req, res) => {
	//
	res.json(Pets.dequeue('cats'))
})

module.exports = router
