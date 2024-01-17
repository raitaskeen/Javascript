// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 234567654356543234567n

// console.log(bigNumber);

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Taskeen", "Shahzaib", "Shahid"];
let myObj ={
    name: "Taskeen",
    age: 19,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof scoreValue);





// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename ="TaskeenHaider"

let anothername = myYoutubename
anothername = "Shahzaib"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    name: "Taskeen",
    age: 19,
    email: "raitaskeenhaider786@gmail.com"
}
let userTwo = userOne
userTwo.name = "Shahzaib"
console.log(userTwo);
