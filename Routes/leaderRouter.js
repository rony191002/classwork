const express = require('express')
const router = express.Router()

router.route('/')
	.all((req, res) => {
		res.send(`${req.method} request on Leader router`)
	})
router.route('/:leaderId')
	.get((req, res) => {
		res.send(`GET request. Leader Id = ${req.params.leaderId}`)
	})
	.post((req, res) => {
		res.send(`POST request. Leader Id = ${req.params.leaderId}`)
	})
	.put((req, res) => {
		res.send(`PUT request. Leader Id = ${req.params.leaderId}`)
	})
	.delete((req, res) => {
		res.send(`DELETE request. Leader Id = ${req.params.leaderId}`)
	})

module.exports = router