// promise
// states:
// 1.Pending, 2.Fullfilled, 3.Rejected

let golden = new Promise((resolve,reject) => {
    let output = true;

    if(output){
        resolve("It is successfull");
    }
    else {
        reject("It is unsuccessfull");
    }
});
golden 
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});

// output
// It is successfull

// Promise Chaining

let sentence = new Promise((resolve,reject) =>{
    resolve(7);
})
.then ((value) =>{
    console.log("step1:",value);
    return value *2;
})
.then ((value)=> {
    console.log("step2:", value);
    return value + 5;
})
.then ((value) => {
console.log("step3",value);
return value -6
})
.then ((value) => {
    console.log("final result", value);

})
.catch ((error) => {
    console.error("Error",error);
});

// output
// step1: 7
// step2: 14
// step3 19
// final result 13

// promise all
let node1 = Promise.resolve(30);
let node2 = Promise.resolve(70);
let node3 = Promise.resolve(90);
 
Promise.all([node1,node2,node3])
.then ((result) => {
    console.log("All promises resolved",result);
})
.catch((error) =>{
    console.error(error);
});

// output
// All promises resolved [ 30, 70, 90 ]

// Array Destructing
 let bikes = ["RE","RX100","R15","HondaShine"];

 let [a,b,c,d] = bikes;
 console.log(b);
 console.log(d);

// output
// RX100
// HondaShine

// Object Destructing
let job = {
    Developer : "2 workers",
    Accounter : "1 worker"
}

let {Developer,Accounter} = job;
console.log(Accounter);
console.log(Developer);

// output
// 1 worker
// 2 workers