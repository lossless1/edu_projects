var domain = require('domain');
var serverDomain = domain.create();

var server = require('./server.js');

serverDomain.on('error', (err) => {
    console.log("ERROR LIKE: ", JSON.stringify(err));
    // if (server) server.close();
    // setTimeout(() => {
    //     process.exit(1);
    // }, 1000).unref();
})

serverDomain.run(() => {
    let ser = new http.Server();
    server.listen(3000);
})
