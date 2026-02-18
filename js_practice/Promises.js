// console.log("Start")

// setTimeout(()=>{
//     console.log("Hello Ankit  kumar");
// },2000);

// console.log("End the code");

// #Callback -> A callback is a function passed into another function to be executed later.

function greet(name,callback){
    console.log("Hi"+name);
    callback();
}

function sayBye(){
    console.log("Bye!")
}

greet("Ankit haiii",sayBye);

//CallbackHell ->when many callback happen
setTimeout(()=>{
    console.log("step 1");
    setTimeout(()=>{
        console.log("step 2");
        setTimeout(()=>{
            console.log("step 3");
        },1000)
    },2000)
},3000);

//Promises -> A promises is an object that represent future comletion or failure of an async task

function waitTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done after 2 seconds");
    }, 2000);
  });
}

waitTwoSeconds().then(msg => console.log(msg));


