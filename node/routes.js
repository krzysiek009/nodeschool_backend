var passport = require('passport');
var User = require('./models/user');

module.exports = function (app) {

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

};