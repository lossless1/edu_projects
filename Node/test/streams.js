var http = require('http');
var path = require('path');
var fs = require('fs');
var zlib = require('zlib');

// var stream = new fs.ReadStream("book.txt", { encoding: "utf-8" });

// stream.on('readable', function (err) {
//     if (err) throw err;
//     var data = stream.read();
//     if (data) {
//         console.log(data.length);
//     }
// })

http.createServer((req, res) => {
    if (req.html === '/big.html') {
        var file = new fs.ReadStream('book.txt');
        sendFile(file, res);
    }
}).listen(3000)
function sendFile(file) {
    // file.on('readable',write);

    // function write(){
    //     var fileContent = file.read();

    //     if(fileContent && !res.write(fileContent)){
    //         file.removeListener('readable', write);
    //         res.once('drain',()=>{
    //             file.on('readable',write);
    //             write();
    //         })
    //     }
    // }
    // file.on('end',()=>{
    //     res.end();
    // })

    file.pipe(res);

    file.on('error', (err) => {
        res.statusCode = 500;
        res.end("Server Error");
        console.log(err);
    })
    file.on('open', () => {
        console.log('open');
    }).on('close',()=>{
        console.log('close');
    })
    
}

// const r = fs.createReadStream('book.txt');
// const z = zlib.createGzip();
// const w = fs.createWriteStream('book.txt.gz');
// r.pipe(z).pipe(w);