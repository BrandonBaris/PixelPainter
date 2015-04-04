//----------------------------------------------- SERVER LOGIC
var express = require('express');
var jade = require('jade');
var bodyParser = require('body-parser');
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
    mongoose.connect('process.env.DATABASE_URL');
var Schema = mongoose.Schema;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

var pictureSchema = new Schema({ filename: { type: String, unique: true}, gridState: { type: String } });
    pictureSchema.plugin(uniqueValidator);
var Picture = mongoose.model('Picture', pictureSchema);

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function ( req, res ) {
  res.render('index');
});

// app.get('/picture/:filename/', function (req, res) {

//   var filename = req.params.filename;

//   res.render('picture', { filename: filename });

// });

app.get('/load', function (req, res) {
 
  Picture.find ( function (err, data) {
    if (err) throw err;
    res.json(data);
  });

});

app.get('/loadPic', function (req, res) {

  var id = req.query.id;
  console.log('id',id);
  Picture.findById ( id, function (err, data) {
    if (err) throw err;
    res.json(data);
  });

});

app.post('/save', function (req, res) {

  var filename = req.body.filename;
  var gridState = req.body.gridState;
  
  var newPicture = new Picture(
    {
      filename : filename,
      gridState : gridState
    }
  );

  newPicture.save( function (err) {
    console.log(err);
    res.sendStatus(200);
  });

});

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('PixelPainter running at http://%s:%s', host, port);

});