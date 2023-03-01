const _ = require('lodash')

module.exports.testFunction = function(testingFunction, input, expectedOutput){
    let test = testingFunction(input)
    console.log(`Does ${test} equal ${expectedOutput}?
     ${ (_.isEqual(test, expectedOutput)) ? 'yes' : 'no' }`)
}

module.exports.testArrays = function(testingFunction, arrayOfInputs, arrayOfExpectedOutput){
    let test = testingFunction(...arrayOfInputs)
    console.log(`Does ${test} equal ${arrayOfExpectedOutput}?
     ${ (_.isEqual(test, arrayOfExpectedOutput)) ? 'yes' : 'no' }`)
}

module.exports.testInputsSingleOutput= function(testingFunction, arrayOfInputs, expectedOutput){
    let test = testingFunction(...arrayOfInputs)
    console.log(`Does ${test} equal ${expectedOutput}?
     ${ (_.isEqual(test, expectedOutput)) ? 'yes' : 'no' }`)
}