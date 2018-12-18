var http = require('http');

// var mysql = require('mysql');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/new_db";
var stream = require('stream');

// var a= require('./new');

// console.log(a);
// MongoClient.connect(url, async (err, db) => {
//     if (err) throw err;
//     var dbo = db.db("new_db");
//     // dbo.collection("customers").find({}).toArray(function(err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     //     db.close();
//     //   });
//     const myquery = {name: "Vova"};
//     const newquery = {$set :{name: "Vladimir"}};
//     dbo.collection("orders").aggregate([
//         {
//             $lookup:{
//                 from: 'products',
//                 localField: 'product_id',
//                 foreignField: 'product_id',
//                 as: 'details'
//             }
//         }
//     ]).toArray((err,res)=>{
//         if (err) throw err;

//         console.log(JSON.stringify(res));
//     });
//     db.close();
//     console.log("Database created");
// })


http.createServer((req, res) => {
    res.write("Hello world!");
    var a = "123123123";
    debugger;
    res.end();
    // var con = mysql.createConnection({
//     host: "localhost",
//     user: "lossless",
//     password: "kalifornia2904",
//     database: 'admin'
// })
// con.connect((err) => {
//     if (err) throw err;
//     console.log("Connected");
//     // var sql = 'INSERT INTO margo (name, address) VALUES ("hello","mydear");';

//     var values = [
//         ['John', 'Highway 71'],
//         ['Peter', 'Lowstreet 4'],
//         ['Amy', 'Apple st 652'],
//         ['Hannah', 'Mountain 21'],
//         ['Michael', 'Valley 345'],
//         ['Sandy', 'Ocean blvd 2'],
//         ['Betty', 'Green Grass 1'],
//         ['Richard', 'Sky st 331'],
//         ['Susan', 'One way 98'],
//         ['Vicky', 'Yellow Garden 2'],
//         ['Ben', 'Park Lane 38'],
//         ['William', 'Central st 954'],
//         ['Chuck', 'Main Road 989'],
//         ['Viola', 'Sideway 1633']
//     ];
//     var sql = 'insert into customers (name, surname) values ?;';
//     con.query(sql, [values], (err, result) => {
//         if (err) throw err;
//         console.log(result.affectedRows);
//     })
// })

}).listen(8080);

