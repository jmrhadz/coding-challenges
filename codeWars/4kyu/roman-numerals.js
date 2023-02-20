/*
https://www.codewars.com/kata/51b66044bce5799a7f000003

Description:

Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
Examples

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

*/


const RomanNumerals = {
    
    //concatenates string n number of times
concat: function(string, n){
 let results = "";
 for(let i = 0;i<n;i++){
   results += string;
 }
 return results;
},

//returns string of roman numerals based on digits
digits: function(place, n){

   let roman = ["M","D","C","L","X","V","I"];
   let current 
   let next 
   let five 
   let results;
//assign current place, next place (factor of 10), and next five (factor of 5)
   switch (place){
     case 1000:
       current = roman[0]
       break;
     case 100:
       current = roman[2]
       next = roman[0]
       five = roman[1]
       break;
     case 10:
       current = roman[4]
       next = roman[2]
       five = roman[3]
       break;
     case 1:
       current = roman[6]
       next = roman[4]
       five = roman[5]
   }  

//convert to roman numerals by digit
   switch (n){
     case 1:
     case 2:
     case 3:
       return this.concat(current, n);
     case 4:
       return current+five;
     case 5:
     case 6:
     case 7:
     case 8:
       return five + this.concat(current, n-5);
     case 9:
       return current+next;
       break;
     default:
       return ""
   }
 },

toRoman: function(value){
       //divide numbers by 5, 10, 50, 100, etc and use the remainders to add to the string 
       let num = value;
       let thousands = (value - (value % 1000))
       num -= thousands

       // let fiveHundreds = (num - (num % 500))
       // num -= fiveHundreds;
       let hundreds =  (num - (num % 100))
       num -= hundreds;
       // let fifties =  (num - (num % 50))
       // num -= fifties;
       let tens = (num - (num % 10))
       num -= tens;
       // let fives = (num - (num % 5))
       // num -= fives;
       let ones = num

       //let arabic = [thousands/1000,fiveHundreds/500,hundreds/100,fifties/50,tens/10,fives/5,ones]
       let arabic = [thousands/1000,hundreds/100,tens/10]

       let result = "";

       //thousands
       result += this.concat("M",arabic[0])

       //hundreds
       result += this.digits(100,arabic[1])

       //tens
       result += this.digits(10,arabic[2])

       //ones
       result += this.digits(1,ones)      
       return result;
 },
//return a value based on roman numeral character
romanValue: function(string){
   switch(string){
     case "M":
       return 1000;
     case "D":
       return 500;
     case "C":
       return 100;
     case "L":
       return 50;
     case "X":
       return 10;
     case "V":
       return 5;
     case "I":
       return 1;
   }
 },

//convert from roman numeral to arabic
fromRoman: function(string){
   
   let lastLetter = ""
   let total = 0;
   //iterate over string
   for(let i = 0;i<string.length;i++){

         //if previous letter value is less than current letter, continue
       if(this.romanValue(string[i-1])<this.romanValue(string[i])){
         continue; 

         //if next letter value is greater than current letter, subtract current letter value from total, add next letter to total
       }else if(this.romanValue(string[i])<this.romanValue(string[i+1])){
         total += (this.romanValue(string[i+1])-this.romanValue(string[i]))

         //otherwise add value to total
       } else {
         total += this.romanValue(string[i])
       }
   }
   return total;

 }

}


// t.testFunction(RomanNumerals.toRoman,1000, "M")
// t.testFunction(RomanNumerals.fromRoman,"M", 1000)
console.log(RomanNumerals.toRoman(1000),"should return M"); // should return 'M'
console.log(RomanNumerals.fromRoman('M'),"should return 1000"); // should return 1000

