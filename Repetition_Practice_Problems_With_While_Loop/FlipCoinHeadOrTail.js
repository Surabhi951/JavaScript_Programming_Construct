//Extend the flip coin problem till either heads or tails wins 11 times
//Initialize variables
let headCount = 0;
let tailCount = 0;

while(headCount < 11 && tailCount < 11){
    let n = Math.floor(Math.random() * 10) % 2;
    if (n == 0) {
        headCount++;//increment head count
    } else {
        tailCount++;//increment tail count
    }
}
console.log("headCount = ",headCount);//print head count 
console.log("tailCount = ",tailCount);//print tail count