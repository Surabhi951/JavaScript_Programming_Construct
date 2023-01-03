const prompt = require("prompt-sync")();
const number = prompt("Enter a number : ");
let factorial = 1;

for (i = 2; i <= number; i++) {
    factorial = factorial * i;
}
console.log("Factorial of number is : " , factorial);