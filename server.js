const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on port 3000')
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', function(req, res) {
  console.log("testing foo and bar")
})
