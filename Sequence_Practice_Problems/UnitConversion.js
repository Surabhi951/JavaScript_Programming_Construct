/*Unit Conversion
a. 1ft = 12 in then 42 in = ?ft
b. Rectangular plot of 60 feet * 40 feet in meters
c. Calculate area of 25 such plots in acres
*/
let ft = 12;
let result = 42 / 12;
console.log("Feet is: " + result);//print result of feet
let feet = 60 * 40;
let meter = 0.3048;
let result1 = feet * 0.3048;
console.log("Meter is:" + result1);//print result of meter
let acre = (25 * result1) / 4046.8;
console.log("Area of 25 plots = "+ acre +" acres");