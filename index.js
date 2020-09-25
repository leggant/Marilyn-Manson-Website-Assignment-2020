const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

