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

// const bigNumber = 3456543576654356754n



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

console.log(typeof anotherId);
console.log(typeof(myFunction))

// https://262.ecma-international.org/5.1/#sec-11.4.3

//====================================================
// stack memory(primitive), Heap memory(Non-primitive)
let nameOne = "nameOne"
let nameTwo = nameOne
nameOne = "name1111"
console.log(nameTwo)
console.log(nameOne)
//In stack,allocate memory to every variable creation or updation
let objOne = {
    email:"test@gmail.com",
    id:1
}
let objTwo = objOne
objOne.email = "xyz@gmail.com"
console.log(objOne)
console.log(objTwo)
//In heap,allocate memory to every variable's reference while creating new obj from scrach while if we creating non primittive datatype by coping another created obj then it will refrence the same obj memory.