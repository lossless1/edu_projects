var http = require('http');
var fs = require('fs');
var path = require('path');
var chat = require('./chat2.js');

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            sendFile("index.html", res);
            break;
        case '/subscription':
            chat.subscribe(req, res);
            break;
        case '/publish':
            var body = ''

            req.on('readable', () => {
                body =+ req.read();
                console.log(body);
                if (body.length > 1e4) {
                    res.statusCode = 413;
                    res.end("Your message is too large");
                }
            }).on('end', () => {
                try {
                    body = JSON.parse(body, false);
                } catch (e) {
                    res.statusCode = 400;
                    res.end('Bad Request');
                    return;
                }
                chat.publish('..');
                res.end('ok');
            })
            break;
        default:
            res.statusCode = 404;
            res.end('Not found');
    }
}).listen(3000);


function sendFile(file,  res) {
    // fs.readFile(file, (err, content) => {
    //     res.end(content.toString());
    // })

    var fileStream = fs.createReadStream(file,{encoding: "utf-8"});
    fileStream.on('error',()=>{
        res.statusCode = 500;
        res.end("Bad Request");
    }).pipe(res);
}