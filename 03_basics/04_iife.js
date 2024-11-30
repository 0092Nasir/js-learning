// Immediately Invoked Function Expressions (IIFE)
// we create IIFE for two reasons:
// for immediate execution of function ex in DB connection
// to restrict function polluted from global scope whether it is vairables or decleration. 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// IIFE function once started it will not end automatically we need to add ; to end the function execution otherwise it will not executed the other IIFE function and throw an error.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// console.log("sadasdas")
// const chai = () => {
//     console.log("dadasasdd")
// }
// chai()

// ========= Javascript Execution Context ===========
// JEC means how the file will run/executed in javascript.
// javascript divide the code in to two phase
// Global Execution context: it is always created when javascript run/execute the file and refer to the variable 'this'.the GEC of the browser different and other environment like Node, bug, dino have their different GEC
// functional Execution context
// eval EC

//how the javascript code is executed in JS.
//the two phases are memory creation phase and execution phase.
// In memory phase, Spaces or memory will be allocated to the decaled variables in the file.
//while execution phase execute the logic nad refer the values to the variables.
//if we are having an functiom or block of code then the nested JEC will be created for that once the block of code is completely excuted it will cleared from the memory.
// call slack
// call slack work on the LIFO principle.
// call slack allocated the moemory to the function once its excuted it will deallocated the memory on the basis of LIFO principal.
