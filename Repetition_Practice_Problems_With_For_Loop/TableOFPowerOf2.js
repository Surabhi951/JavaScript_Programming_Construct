const prompt = require("prompt-sync")();
let n = prompt("enter value for n : ");

for (let i = 1; i <= n; i++) {
    console.log(Math.pow(2,i));
}