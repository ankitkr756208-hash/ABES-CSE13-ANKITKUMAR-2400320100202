function showText() {
  let input = document.getElementById("inputBox").value;
  document.getElementById("output1").innerText = "Typed: " + input;
}

function addNumbers() {
  let a = Number(document.getElementById("addNum1").value);
  let b = Number(document.getElementById("addNum2").value);
  document.getElementById("output").innerText = "Sum: " + (a + b);
}

function makeGreen() {
  document.getElementById("abc").style.color = "green";
  alert("Button turned green");
}

function sayHello() {
  alert("Hello JavaScript!");
}

function textLength() {
  let val = document.getElementById("box").value;
  document.getElementById("abcd").innerHTML = "Length: " + val.length;
}

function reverseText() {
  let val = document.getElementById("box2").value;
  document.getElementById("ak").innerHTML =
    "Reversed: " + val.split("").reverse().join("");
}

function greet() {
  let name = document.getElementById("nameInput").value;
  alert("Hello, " + name);
}

function add() {
  let a = Number(document.getElementById("calcNum1").value);
  let b = Number(document.getElementById("calcNum2").value);
  document.getElementById("result").innerHTML = "Addition: " + (a + b);
}

function sub() {
  let a = Number(document.getElementById("calcNum1").value);
  let b = Number(document.getElementById("calcNum2").value);
  document.getElementById("result").innerHTML = "Substraction: " + (a - b);
}

function mul() {
  let a = Number(document.getElementById("calcNum1").value);
  let b = Number(document.getElementById("calcNum2").value);
  document.getElementById("result").innerHTML = "Multiplication: " + (a * b);
}

function div() {
  let a = Number(document.getElementById("calcNum1").value);
  let b = Number(document.getElementById("calcNum2").value);

  if (b === 0) {
    document.getElementById("result").innerHTML = "Cannot divide by zero!";
  } else {
    document.getElementById("result").innerHTML = "Divide Result: " + (a / b);
  }
}
