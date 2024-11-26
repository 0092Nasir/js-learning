// singleton

//Objects created using object literals are singletons. This means when a change is made to the object, it affects that object across the entire script.
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // if we want to create a key in object by symbol data type then we need to write it in square braket.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //one way to fetch the object's key values but not applicable for symbol datatype and string key.

// console.log(JsUser["email"]) //recommented to use this
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //for the symbol keys

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // use to freeze the object means once the object is freeze, it can't be modify.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}   // 'this'is used to get the key's value of the objects.

// console.log(JsUser.greeting()); // getting double values.
// console.log(JsUser.greetingTwo());
JsUser.greeting()
JsUser.greetingTwo()