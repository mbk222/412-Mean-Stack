let express = require('express');
let path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
  //res.send('Hello world');
});

app.post('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function() {
  console.log('Server start');
});
