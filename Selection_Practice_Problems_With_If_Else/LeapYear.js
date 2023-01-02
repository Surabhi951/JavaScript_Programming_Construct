/*A program that takes a year as i/p and o/p the year is a leap year or not a leap year.
A leap year checks for 4 digit number, divisible by 4 and not 100 unless divisible by 400.
*/

var year = 2016;
//check year is leap year or not using if else condition
if(year%4==0 || year%400==0 && year%100==0) {
    console.log("Leap Year");
}
else {
    console.log("Not leap Year");
}