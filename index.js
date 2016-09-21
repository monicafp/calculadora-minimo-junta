var express = require('express');
// var exphbs = require('express-handlebars');
var app = express();
// var http = require('http').Server(app);

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
app.use(express.static('public'));

// app.get('/', function(req, res){
//   res.render('./public/index.html');
// });

// http.listen(3000, function() {
//   console.log('Server is running.');
// });

app.post('/calculate', function(request, response) {
  // Calculations for income
  // res.json({});
});

app.listen(3000);
