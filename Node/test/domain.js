var http = require('http');
var path = require('path');
var domain = require('domain');
var fs = require('fs');

var serverDomain = domain.create();

serverDomain.on('error', (err) => {
    console.log(err);
    // res.statusCode = 404;
    // res.end("bad request!");
})
let server = new http.createServer(handlerServer);
function handlerServer(req, res) {
    if (req.url === '/') {
        fs.readFile('no-such-file', (err, content) => {
            if (err) throw err;
            res.end(content);
        })
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}

serverDomain.run(() => {

    server.listen(3000);
   
})
