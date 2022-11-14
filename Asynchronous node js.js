// console.log('Start exe...1');

// console.log('Start exe.....2');

// console.log('Start exe........3');
/*
Start exe...1
Start exe.....2
Start exe........3 
*/


console.log('Start exe...1');

setTimeout(() => {
    console.log('Start exe.....2');
}, 2000);
console.log('Start exe........3');


/*
Start exe...1
Start exe........3
Start exe.....2(after 2000 it will exicute)
*/

/*drawback 

        let a=10;
        let b=0;

        setTimeout(() => { 
            b=20;
        }, 2000);
        console.log(a+b);
*/

/*
            10
*/


// /how to solve this problem
// 
// solve this problem with Promise

let a=10;
let b=10;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(20);
    }, 2000);

});

waitingData.then((data)=>{
    console.log(a+data);
});