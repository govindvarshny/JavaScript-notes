// 1. JavaScript Console API

// console.log("hello world", 10 + 2, "ways ");
// console.error("Error there");
// console.warn("warning");

// 2. JavaScript Variables

// var number1 = 34;
// var number2 = 1;

// console.log(number1 + number2);

// 3. DataTypes in JavaScript --> Primitive (undefined, number, string, boolean, symbol, null) and Reference(Arrays and objects) DataTypes
// Numbers

// var num1 = 10;
// var num2 = 20;

// String

// var str1 = "govind";
// var str2 = "varshney";

// Object

// var marks = {
//   anushka: 10,
//   govind: 20.1,
//   devansh: 30.22,
// };

// Booleans

// var a = true;
// var b = false;

// Undefined

// var und; // not declaring any value
// var n = null; // assigning value to null

//  Arrays

// var arr = [1, 2, 3, 4, 5, "Govind"];

// console.log(arr);

// Operators in JavaScript
// arithematic operators

// var a = 10;
// var b = 20;

// console.log("The value of  a + b is ", a + b);
// console.log("The value of  a - b is ", a - b);
// console.log("The value of  a * b is ", a * b);
// console.log("The value of  a / b is ", a / b);

// Assignment operators

// var c = b;
// c += 2;
// console.log(c);

// Comparison Operators
// console.log(a <= b);
// console.log(a >= b);
// console.log(a == b);
// console.log(a < b);
// console.log(a > b);

// Logical Operators

// console.log(a || b);
// console.log(b && c);

// Javascript Functions
// DRY = Do not repeat yourself

// function avg(a, b) {
//   return (a + b) / 2;
// }

// c = avg(2, 2);
// console.log(c);

// Conditional in Javascript

// var age = 4;
// if (age > 8) {
//   console.log("you are not a kid");
// } else {
//   console.log("you are a kid");
// }

// Exsmple to use conditional statement in functions
// function agecheck(age) {
//   if (age < 10) {
//     console.log("You are a kid");
//   } else if (age > 10 && age < 18) {
//     console.log("You are a teenager");
//   } else if (age > 18 && age < 45) {
//     console.log("You are an adult");
//   } else {
//     console.log("You are an Senior citizen");
//   }
//    return c;
// }

// var c = agecheck(60);

//var arr = [1, 2, 3, 4, 5, 6, 7];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for each can be used for iteraion
// arr.forEach(function (element) {
//   console.log(element);
// });

// introduction to let and constant, they are introduced in ES6
// let j = 0;
// const a = 0;
// a = a + 1;
// console.log(a);

// let myArr = ["fan", "camera", 34, null, true];

// myArr.pop(4);
// console.log(myArr);

// String methods in javascript

// let myString = "Hello i`m govind varshney, how are you";
// console.log(myString.slice(2, 4));
// console.log(myString.replace("govind", "anushka"));

// Dates method

// let myDate = new Date();
// console.log(myDate.getTime());

// Arrow Function

function sum(a, b) {
  return a + b;
}

sum = (a, b) => {
  return a * b;
};
