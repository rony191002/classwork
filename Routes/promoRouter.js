const express = require('express')
const router = express.Router()

router.route('/')
	.all((req, res) => {
		res.send(`${req.method} request on Promotion router`)
	})
router.route('/:promoId')
	.get((req, res) => {
		res.send(`GET request. Promotion Id = ${req.params.promoId}`)
	})
	.post((req, res) => {
		res.send(`POST request. Promotion Id = ${req.params.promoId}`)
	})
	.put((req, res) => {
		res.send(`PUT request. Promotion Id = ${req.params.promoId}`)
	})
	.delete((req, res) => {
		res.send(`DELETE request. Promotion Id = ${req.params.promoId}`)
	})
module.exports = router