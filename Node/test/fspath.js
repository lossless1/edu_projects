var http = require('http');
var mime = require('mime-types');
var fs = require('fs');
var url = require('url');
var path = require('path');

var ROOT = __dirname + "/public/";

http.createServer((req, res) => {
    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end("Tell me the secret code!!");
        return
    }
    console.log(url.parse(req.url).pathname);
    sendFileSafe(url.parse(req.url).pathname, res);

}).listen(3000);

function sendFileSafe(filePath, res) {
    console.log(123);

    try {
        filePath = decodeURIComponent(filePath);
    } catch (e) {
        res.statusCode = 400;
        res.end("Bad request");
        return;
    }

    if (~filePath.indexOf('\0')) {
        res.statusCode = 400;
        res.end("Bad request");
        return;
    }

    filePath = path.normalize(path.join(ROOT, filePath));
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.end("File not found");
            return;
        }
    })
    sendFile(filePath, res);
}

function sendFile(path, res) {
    fs.readFile(path, (err, content) => {
        try {
            if (err) throw err;
            var mimeType = mime.lookup(path);
            res.setHeader('Content-Type', mimeType + "; charser=utf-8");
            res.end(content);
        } catch (e) {
            console.log(e)
        };
    })
}

function checkAccess(req) {
    return url.parse(req.url, true).query.secret === "ohoho";
}