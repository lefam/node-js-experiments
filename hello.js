/*
 * by Leonel Machava <leonelmachava@gmail.com>
 */
var http = require("http");

http.createServer( function(req, res) {
    // We will output "Hello from Node.JS" in HTML format.
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Hello from Node.JS</h1>");
}).listen(8080);

console.log("Running webserver on port 8080");