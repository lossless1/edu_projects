var http = require('http');
var fs = require('fs');
var url = require('url');

function handler(req, res) {
    if (req.url !== "/favicon.ico") {
        fs.readFile(req.url.substr(1), (err, data) => {
            if (err) {
                res.end(err.code);
                throw err;
            }
            res.end(data);
        })
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}
var server = http.createServer(handler);
module.exports = server;