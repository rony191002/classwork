const express = require('express')
const router = express.Router()

router.route('/')
	.all((req, res) => {
		res.send(`${req.method} request on dishes router`)
	})
router.route('/:dishId')
	.get((req, res) => {
		res.send(`GET request. Dish Id = ${req.params.dishId}`)
	})
	.post((req, res) => {
		res.send(`POST request. Dish Id = ${req.params.dishId}`)
	})
	.put((req, res) => {
		res.send(`PUT request on Dish Id = ${req.params.dishId}`)
	})
	.delete((req, res) => {
		res.send(`DELETE request. Dish Id = ${req.params.dishId}`)
	})

module.exports = router