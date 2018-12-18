var http = require('http');
var fs = require('fs');
var log = require('winston');
var url = require('url');
http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        res.write("Hello world");
        eval("console.log('123')");
    }
    res.end("");
}).listen(2000);

// log.error("Hello world");

// const file = fs.createWriteStream('hello.txt');
// file.write('hello');
// file.end();
// var server = http.Server();

// server.on('request', (req, res) => {
//     var info;
//     if (req.url == '/') {
//         fs.readFile('index2.js', (err, data) => {
//             try {
//                 if (err) throw err;
//                 res.end(data);

//             }

//             catch (e) {
//                 console.log(e);
//             }
//         });
//     }
// })
// server.listen(3000);

// setTimeout(() => {
//     clearInterval(timer);
// }, 3005);

// let timer = setInterval(() => {
//     console.log(1000);
//     console.log(process.memoryUsage());
// }, 1000)

// var a = fs.readFile('demofile1.html',{encoding: 'utf-8'}, (err, data) => {
//     if(err) throw err;
//     // console.log(data[1]);
//     console.log(data);

//     // let buffer = new Buffer.alloc("hello world").size(10);
//     // console.log(buffer)
// })

// let file = 'demofile1.html';
// fs.exists(file,(isExist)=>{
//     if(isExist){
//         fs.stat(file,(err,data)=>{
//             if(err) throw err;
//             console.log(data.isFile());
//             console.log(data);
//         })
//     }else{
//         console.log("File not exist");
//     }
// })
