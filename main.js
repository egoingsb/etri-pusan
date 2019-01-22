var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var title = parsedUrl.query.id;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
    <html>
    <body>
        <h1><a href="/index.html">WEB</a></h1>
        <ol>
            <li><a href="html.html">html</a></li>
            <li><a href="css.html">css</a></li>
            <li><a href="javascript.html">javascript</a></li>
        </ol>
        <h2>${title}</h2>
        HTML is Hypertext Markup Language. Velit pariatur reprehenderit id cupidatat officia adipisicing. Elit laboris
        pariatur enim voluptate ut ex ut qui duis aliquip aute. Commodo ut exercitation irure pariatur occaecat tempor
        ullamco
    </body>
    </html>
    `); 
    res.end();
}).listen(9999);