
const { MongoClient, Collection } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'teapack';

async function dbconnect() {
    // Use connect method to connect to the server
    let result = await client.connect();
    // console.log('Connected successfully to server');
    const db = result.db(dbName);
    return db.collection('bazar');  
  
  }

module.exports = dbconnect;