const dbconnect = require("./mongodb");

// // read
// const insert =async ()=>{
//     const db =await dbconnect();
//     //console.log(db); => db print kori then promise asbe tai await use korte hobe.
//     let data = db.find().toArray(); 
//     // console.log(data)// this will also gives us promise//that's why we use await function to read
//     console.log(await(data));
// };
// insert();


// (Insert)
const insert =async ()=>{
    const db =await dbconnect();
    const result = await db.insert(
        {
            name: 'chamok ahmed',
            id: 5,
            contact: '01521405119',
            hobby: 'gardening',
            home: 'dhaka',
            gf : 'not applicable'
        },
        
    );
    console.log(result)

};

insert();