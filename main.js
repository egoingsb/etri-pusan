var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('<script>document.write(Math.random());</script>');
    res.write('<br>');
    res.write(Math.random().toString()); //write a response to the client
    res.end(); //end the response
}).listen(9999); //the server object listens on port 8080
