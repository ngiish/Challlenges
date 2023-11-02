// example:


console.log(message);
let message1 = "Hello, hoisting!";

// In a non-hoisted scenario, this code would throw an error because the `message` variable is being accessed before it is declared. 
// However, due to hoisting, the code is actually interpreted like this:

let message;
console.log(message);
message = "Hello, hoisting!";
