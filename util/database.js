const dbPass =require('./dbPassword');

const mysql = require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:dbPass
});

module.exports=pool.promise();