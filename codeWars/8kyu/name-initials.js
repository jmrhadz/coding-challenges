/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/
const t = require('../testFunction')

function abbrevName(name){
    return name.split(" ").map(name => name[0]).map(letter=> letter.toUpperCase()).join('.')
}

t.testFunction(abbrevName, "Sam Harris","S.H")
t.testFunction(abbrevName, "patrick feeney","P.F")
