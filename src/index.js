const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {engine} = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('dev'))

//Template engine
app.engine('hbs', engine({extname: '.hbs'}));
// app.engine('handlebars', engine());
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resource/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/tin-tuc', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})