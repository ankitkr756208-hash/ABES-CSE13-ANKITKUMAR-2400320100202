// console.log("Start")

const { resolve } = require("node:path");
const { promiseHooks } = require("node:v8");

// setTimeout(()=>{
//     console.log("Hello Ankit  kumar");
// },2000);

// console.log("End the code");

// #Callback -> A callback is a function passed into another function to be executed later.

// function greet(name,callback){
//     console.log("Hi"+name);
//     callback();
// }

// function sayBye(){
//     console.log("Bye!")
// }

// greet("Ankit haiii",sayBye);

// //CallbackHell ->when many callback happen
// setTimeout(()=>{
//     console.log("step 1");
//     setTimeout(()=>{
//         console.log("step 2");
//         setTimeout(()=>{
//             console.log("step 3");
//         },1000)
//     },2000)
// },3000);
// //Promises -> A promises is an object that represent future comletion or failure of an async task

// function waitTwoSeconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Done after 2 seconds");
//     }, 2000);
//   });
// }

// waitTwoSeconds().then(msg => console.log(msg));

// const promise=new Promise((resolve)=>{
//     resolve("Success");
// });

// promise.then((result)=>{
//     console.log(result);
// });

function register() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Registered");

            resolve();

        }, 2000);

    });

}
function login() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Logged In");

            resolve();

        }, 2000);

    });

}

function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Data Received");

            resolve();

        }, 2000);

    });

}

register()
.then(login)
.then(getData)
.then(() => {

    console.log("Completed");

});



// Error Handling in Promises
function payment(success){
        return new promise((resolve,rreject)=>{
            if(success){
                resolve("Payment Successful");
            }
            else{
                rejects("Payment Failed");
            }
        });

}

// async function
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetching Data...");
            resolve("Student Data");
        }, 2000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing Data...");
            resolve(data + " Processed");
        }, 2000);
    });
}

async function run() {
    try {
        const data = await fetchData();

        const result = await processData(data);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

run();


