const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
	res.render('index', {
		key: `${process.env.KEY}`,
	});
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})