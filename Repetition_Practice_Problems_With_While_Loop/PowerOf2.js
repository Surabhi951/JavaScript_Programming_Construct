const prompt = require("prompt-sync")();
let number = prompt("enter value for n : ");//Take input from user

let i = 1;//initialize variable
while (i <= number) {
    let powerOfTwo = Math.pow(2, i);
    if (powerOfTwo <= 256) {
        console.log(powerOfTwo);
        i++;
    }
    else {
        break;
    }
}