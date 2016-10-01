const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

var db

MongoClient.connect('mongodb://<admin>:<admin>@ds047166.mlab.com:47166/personal-website', 
function(err, database) {
  if (err) return console.log(err)
  db = database
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/items', function(req, res) {
  console.log(req.body)
})
