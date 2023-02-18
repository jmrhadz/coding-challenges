/*
https://www.codewars.com/kata/563cf89eb4747c5fb100001b

The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

//import lodash for comparing arrays in testing
const _ = require('lodash')



function removeSmallest(numbers) {
    let arr = [...numbers]        //copy input array
    let min = Math.min(...arr)    //find minimum
    let index = arr.indexOf(min)  //find index of minimum in array
    arr.splice(index, 1)          //delete at index
    return arr;
  }

  //tests

function testRemoveSmallest(input, expectedOutput){
    const test = removeSmallest(input)
    console.log(`Does ${test} equal ${expectedOutput}? ${ (_.isEqual(test, expectedOutput)) ? 'yes' : 'no' }`)
}

  
testRemoveSmallest([1,2,3,4,5],[2,3,4,5])
testRemoveSmallest([5,3,2,1,4],[5,3,2,4])
testRemoveSmallest([2,2,1,2,1],[2,2,2,1])
