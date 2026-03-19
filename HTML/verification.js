//Email Validation
let email = "test@gmail.com";

let pattern1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern1.test(email));  // true



//Phone validation
let phone = "9876543210";
let pattern3 = /^[0-9]{10}$/;
console.log(pattern3.test(phone));