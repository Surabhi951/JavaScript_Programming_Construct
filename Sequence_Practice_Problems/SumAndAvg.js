//Read 5 random 2 digit values, then find their sum and the average
let sum = 0;//initialize sum variable
for(let i = 0; i < 5; i++);
let number = Math.floor((Math.random() * 90) + 10);
sum += number;
let average = sum / 5;//sum divided by 5 and result store in average
console.log("The sum of 5 random 2 digit value is: " ,sum);//print sum
console.log("The average of 5 random 2 digit value is: " ,average);//print average