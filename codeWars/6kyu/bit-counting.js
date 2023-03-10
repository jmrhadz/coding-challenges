/*
https://www.codewars.com/kata/526571aae218b8ee490006f4

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

const t = require('../testFunction')

function countBits (n) {
    //stringify the binary parsed n
    let string = n.toString(2);
    //count every 1 in the string
    let count = 0;
    for(let i = 0; i<string.length;i++){
      if(string[i]=="1"){
        count++
      }
    }
    //return results
    return count;
  };

function bitCount (n) {
    let arr = n.toString(2).split("")   //convert number to binary and split into an array
    return arr.filter(i=>i=="1").length //return number of 1s
}

 t.testFunction(bitCount, 1234, 5)