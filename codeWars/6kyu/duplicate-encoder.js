/*
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/
const t = require('../testFunction')
function duplicateEncode(word){
    console.log(word)
   const split = word.toLowerCase().split("")
   let results = ""
   let used = []
   split.forEach((char, index) => {
     if(used.indexOf(char)>-1 || split.indexOf(char, index+1)>-1){
       results += ")"
       used.push(char)
     } else {
       results += "("
     }
   })
   return results
 }
 
//  "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
 t.testFunction(duplicateEncode, "din", "(((")
 t.testFunction(duplicateEncode, "recede", "()()()")
 t.testFunction(duplicateEncode, "Success", ")())())")
 t.testFunction(duplicateEncode, "(( @", "))((")