var activeClients = [];

exports.subscription = function (res, req) {
    console.log("subscribe");
    activeClients.push(res);
    res.on('close', () => {
        activeClients.splice(activeClients.indexOf(res), 1);
    })
}

exports.publish = function (message) {
    console.log("publish '%s'", message);
    activeClients.forEach((res) => {
        res.end(message);
    })
    activeClients = [];
}