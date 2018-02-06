var express = require('express');
var app = express();
app.use(express.static(__dirname + '/pratice'));
var port = 1234;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/pratice/main.html');
  console.log("user navigated");
});

app.get('/praticedo', function(req, res) {
  var first=parseInt(req.query.first);
  var second=parseInt(req.query.second);
  
  var sum = first+second;
  sum =sum.toString();
  res.send(sum);
});

app.listen(port, function(){
  console.log('listening on port: ' + port);
});