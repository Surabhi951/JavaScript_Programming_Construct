function checkPalindrome(inputNum){
    //initialize variables
    let i = inputNum;
    let rev = 0;
    while (i > 0){
        let remainder = i % 10;
        rev = parseInt(rev * 10 + remainder);
        i = parseInt(i/10);
    }
    if (inputNum == rev) {
        return true;
    }else
        return false;
}
const prompt = require("prompt-sync")();
let number =parseInt( prompt("enter number to check palindrome: ") );
let isPalindrome = checkPalindrome(number);//calling method and store in isPalindrome variable

if(isPalindrome){
  console.log(number," is palindrome number");
} else {
    console.log(number," is not palindrome number");
}