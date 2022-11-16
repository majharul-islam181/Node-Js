
const dbconnect = require('./mongodb'); //import form another file

// async function main() {
//     // Use connect method to connect to the server
//     let result = await client.connect();
//     console.log('Connected successfully to server');
//     const db = result.db(dbName);
//     const collection = db.collection('bazar');
//     let response = await collection.find({}).toArray();
//     console.log(response);
//   }
//   main()

/* //1st way

async function dbconnect() {
  // Use connect method to connect to the server
  let result = await client.connect();
  console.log('Connected successfully to server');
  const db = result.db(dbName);
  return db.collection('bazar');  //  promise returen korbe + collect means lots of array, for this array we need another promises
 
}
//promises handle korar jonoo then function use korte hobe
dbconnect().then((response)=>{
  response.find({name: 'majharul islam'c}).toArray().then((data)=>{ //collection er jonno another promise use kora hyse
    console.log(data);
  });
});

 */


//2nd way (simple way, best way)
// const dbconnect = require('./mongodb'); //import form another file

const main =async ()=>{
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
};

main();