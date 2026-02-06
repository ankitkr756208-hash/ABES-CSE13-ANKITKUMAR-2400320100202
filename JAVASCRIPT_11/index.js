console.log("Ankit kumar");

d=89
console.log(typeof(d))
let und;
let nul=null;
let bool=true;
console.log(typeof(bool))
console.log(typeof(und))
console.log(typeof(null))


a=8 
b=9
console.log("sumation of two number is ", a + b);
console.log("sbtraction of two number is ", a - b);
console.log("multiplication of two number is ", a * b);
console.log("divide of two number is ", a / b);

let h=9
var t=90
var t=100
console.log(h)
console.log(t)


function add(w,t){
    return w+t;
}
add(23,34)
//Arrow function
const sum=(x,y)=>{
    return x+y;
}
sum(12,56)

let arr=[1,2,3,4,5,5]
console.log(arr)

arr.push(8)
console.log(arr)


//OBJECT
let std={
    name:"Ankit kumar",
    age: 20,
    course:"btech"
};

console.log(std);
console.log(std.name,std.age);

let date=new Date ()


console.time("test");
for(let i=0;i<100000;i++){}
    console.timeEnd("test");

  console.group()   
 console.count("a")
 console.count("a")
 console.count("a")
 console.count("b")
 console.count("a")
 console.count("c")

//Table
let stduent={name:"Ankit kumar",age:20,course:"btech"}
console.table(stduent);