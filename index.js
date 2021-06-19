//Part one
//a
console.log(`Javascript`[8]);
//b
console.log("Strings are sequences of characters."[5]);
//c
console.log("Wonderful".length)

//d
console.log("Do spaces count?".length);

let num = 1001;
//Returns 'undefined'.
//console.log(typeof(num));

//Use type conversion to print the length (number of digits) of an integer.
//2a:
console.log(num.length); // equals undefined because its an integer(number)
console.log(String(num).length); // equals 4

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//2b
let num2 = 12.345;
console.log(String(num2).length); //equals 6(including decimal in number)

// if (String(num2).includes(`.`) ){
//     console.log(String(num2).length -1);
// };
//prints 5 (does not includes the decimal)


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num2).includes(`.`) ){
    console.log(String(num2).length-1);
} else {
  console.log(String(num2).length);
};