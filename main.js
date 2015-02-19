var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);
   // io = require('socket.io').listen(app);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
	console.log("Listening on port " + PORT)
});

app.set('view engine', 'jade');
	
	app.use(express.static(__dirname + '/static'));

	io.set('transports', ['websocket', 'xhr-polling']);


app.get('/', function(request, response) {
	response.render('main.jade');
});

require('./io')(io);