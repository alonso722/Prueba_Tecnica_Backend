const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/hola_mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
  })

  app.get('*', function (req, res) {
    res.send('ERROR 404 | Page Not Found')
  })
app.listen(8080)