const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Msg = require('./message-model');

mongoose.connect('mongodb://mongo/node');

const app = express();

app.use(bodyParser.json());


app.get('/', function(req, res){
  res.send("Hello, World! Is the reload working?l");
});

app.get('/messages', function (req, res) {
  Msg.find()
    .exec()
    .then(msgs => res.send(msgs))
    .catch(err => res.send(err));
});

app.post('/messages', function (req, res) {
  new Msg({author: req.body.author, text: req.body.text}).save();
  res.send(req.header);
  res.end();
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
