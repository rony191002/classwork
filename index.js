const express = require('express')
const app = express()
const path = require('path')
const PORT = (process.env.PORT || 3000)
app.use(express.urlencoded({
	extended: "false"
}))
app.use(express.json())
app.use('/dishes', require('./Routes/dishRouter'))
app.use('/promotions', require('./Routes/promoRouter'))
app.use('/leader', require('./Routes/leaderRouter'))
app.all('/', (req, res) => {
	res.send('Index Page')
})
app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`)
})