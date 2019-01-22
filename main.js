var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var title = parsedUrl.query.id;
    if(title === undefined){
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
    <html>
    <body>
        <h1><a href="/index.html">WEB</a></h1>
        <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">javascript</a></li>
        </ol>
        <h2>${title}</h2>
        ${fs.readFileSync('data/'+title)}
    </body>
    </html>
    `); 
    res.end();
}).listen(9999);