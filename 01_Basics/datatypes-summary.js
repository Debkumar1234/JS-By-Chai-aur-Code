//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*

JavaScript is a dynamically typed language.
This means that:
Type checking occurs at runtime:
The type of a variable is determined when the code is actually executed, not during a separate compilation phase.
Variable types are not explicitly declared:
You do not need to specify the data type (e.g., number, string) when declaring a variable. The JavaScript engine infers the type based on the value assigned to it. 
Variables can hold values of different types:
A single variable can be assigned a number, then later a string, and then an object without requiring explicit type conversion or causing a compile-time error.
In contrast, statically typed languages (like Java or C++) require you to explicitly declare the type of a variable, and type checks are performed at compile time, catching potential type-related errors before the program runs.

*/