var http = require("http");
var opts = require('optimist').argv;
console.log(process.env)
http.createServer((req,res)=>{
    res.end("The server is runnings!");
}).listen(opts.port ? parseInt(opts.port) : 3000);

