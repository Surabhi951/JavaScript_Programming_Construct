//Reas a number and display the week day(sunday,monday,....)

const prompt=require("prompt-sync")(); 
const number = prompt('enter number between (0-9) : ');

switch(number){
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case '3':
        console.log("Wednesday");
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default :
        console.log("Incorrect input");
        break;
}