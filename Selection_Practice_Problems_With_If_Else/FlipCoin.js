//To simulate a coin flip and print out Heads or Tails accordingly

var value = Math.floor(Math.random() * 2);
if(value < 0.5) {
    console.log("Tail");
}
else {
    console.log("Head");
}
