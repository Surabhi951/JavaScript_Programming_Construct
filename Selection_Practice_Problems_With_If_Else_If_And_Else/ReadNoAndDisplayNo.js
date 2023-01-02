//Read number 1,10,100,1000,etc and display unit,ten,hundred,....

const prompt=require("prompt-sync")(); 
const NUMBER = prompt('Enter a number: ');

if ( NUMBER == 1 ) {
    console.log("Units");
}
else if ( NUMBER == 10 ) {
    console.log("Tens");
}
else if ( NUMBER == 100 ) {
    console.log("Hundreds");
}
else if ( NUMBER == 1000 ) {
    console.log("Thousands");
}
else if ( NUMBER == 10000 ) {
    console.log("Ten thousands");
}
else {
    console.log("Invalid input!");
}