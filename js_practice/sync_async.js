// console.log("we are learning sync and async js")
// //sync
// console.log("start 1")
// console.log("start 2")
// console.log("start 3")
// //async
// console.log("ram")

// setTimeout(()=>{
//     console.log("ankit")
// },2000)
// console.log("saidpur")


function register(){
    wait(5000)
    console.log("Register");
}
function login(){
    wait(4000)
    console.log("Register");
}
function gatedata(){
    wait(4000)
    console.log("Register");
}
function displayData(){
    wait(4000)
    console.log("Register");
}
function wait(x){
   let date = Date.now()
    while(Date.now() < date + x){}
}
register()
login()
gatedata()
displayData()