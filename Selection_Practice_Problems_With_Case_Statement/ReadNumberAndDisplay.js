//Read a number 1,10,100,1000, etc and display unit,ten,hundred,....

const prompt=require("prompt-sync")(); 
const num = prompt('enter number : ');

switch(num){
    case '1':
        console.log("Unit");
        break;
    case '10':
        console.log("Ten");
        break;
    case '100':
        console.log("Hundred");
        break;
    case '1000':
        console.log("Thousand");
        break;
    default:
        console.log("Enter valid number")
        break;
}