//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

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

// console.log(typeof bigNumber);

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

/* Stack (Primitive), Heap (Non-Primitive) */

let myName = "Debkumar"
let anotherName = myName

anotherName = "Debkumar Mallick"

console.log(myName) // --> Debkumar
console.log(anotherName) // --> Debkumar Mallick

/*
Notes:

    --> Primitive types → String, Number, Boolean, null, undefined, Symbol, BigInt.

    --> These are stored directly in stack memory.

    --> When you assign anotherName = myName, a copy of the value is made — they become independent.

    --> Changing anotherName does not affect myName, because each variable holds its own copy of the value.
*/

let obj1 = {
    email: "debkumar@gmail.com",
    password: "1234"
}

let obj2 = obj1

obj2.email = "debkumar@google.com"

console.log(obj1.email) // --> debkumar@google.com
console.log(obj2.email) // --> debkumar@google.com

/*
Notes:

    --> Non-primitive types → Object, Array, Function, etc.

    --> The actual object is stored in heap memory, while the variable in the stack holds a reference (pointer) to that object.

    --> When you do obj2 = obj1, both variables now point to the same object in heap.

    --> Changing obj2.email changes the single shared object, so both obj1 and obj2 show the update.
*/

