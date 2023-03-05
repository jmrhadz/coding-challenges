/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83

Description:

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

const t = require('../testFunction')

function createPhoneNumber(numbers){

    //insert "(" at 0
    numbers.splice(0,0,"(");

    //insert ") " at 4
    numbers.splice(4,0,") ");
    
    //insert "-" at 8
    numbers.splice(8,0,"-");
    
    return numbers.join("")
  
  }

  t.testFunction(createPhoneNumber,[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"(123) 456-7890")