/*
https://www.codewars.com/kata/583203e6eb35d7980400002a

Description:

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;


*/
const t = require('../testFunction')

//return the total number of smiling faces in the array
function countSmileys(arr) {
    const validSmileys = [':)', ':D', ';)', ';D', ':-)', ':-D', ';-)', ';-D', ':~)', ':~D', ';~)', ';~D'];
  
    return arr.filter(face => validSmileys.includes(face)).length
}

t.testFunction(countSmileys,[':)', ';(', ';}', ':-D'],2)
t.testFunction(countSmileys,[';D', ':-(', ':-)', ';~)'],3)
t.testFunction(countSmileys,[';]', ':[', ';*', ':$', ';-D'],1)