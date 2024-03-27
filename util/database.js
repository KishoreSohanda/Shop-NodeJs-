const dbPass = require('./dbPassword');

let _db;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://kishoresohanda100:${dbPass.mongodbPass}@nodeapp.ddj07fv.mongodb.net/shop?retryWrites=true&w=majority&appName=NodeApp`)
        .then(client => {
            _db=client.db();
            console.log('Connected!');
            callback();
        })
        .catch(err => {
            console.log(err)
            throw err;
        });
};

const getDb=()=>{
    if(_db){
        return _db;
    }
    throw 'No database found!';
};
 
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;

