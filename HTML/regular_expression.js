
let pattern = /hello/;
console.log(pattern.test("hello world"));  // true

let str = "HELLO";

console.log(/hello/i.test(str));   // true

//global match
let str1 = "hello hello hello";

console.log(str1.match(/hello/g));

//Multiline
let str2 = `hello
world`;
console.log(/^world/m.test(str2));  // true

//Email Validation
let email = "test@gmail.com";

let pattern1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern1.test(email));  // true

//Phone validation
let phone = "9876543210";
let pattern3 = /^[0-9]{10}$/;
console.log(pattern3.test(phone));

let c=/^d+$/;
console.log(c.test("1234a5"));  // true
console.log(c.test("123a5"));  // false

let rang=/\d{3}/;
console.log(rang.test("1234"));  // true

//exec()
// let regex = /hello/g;
// let str3 = "hello world hello";
// let match;
// while ((match = regex.exec(str3)) !== null) {
//   console.log(`Found ${match[0]} at index ${match.index}`);
// }
let test1="hello world";
let res=test1.search(/world/);
console.log(res);  // 6


let text1="aa,b,c";
let result=text1.split(/,/);
console.log(result);  // ["aa", "b", "c"]