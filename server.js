//----------------------------------------------- SERVER LOGIC
var express = require('express');
var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var app = express();
var bodyParser = require('body-parser');

var pictureSchema = new Schema({
  
  bgcolor: Array
});

var Picture = mongoose.model('Picture', pictureSchema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');

app.get('/:picture?', function (req, res) {

  var pictureID = req.params.picture;

  res.render('picture', { bgcolor : bgcolor });
});