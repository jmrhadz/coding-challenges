const _ = require('lodash')

module.exports.testFunction = function(testingFunction, input, expectedOutput){
    let test = testingFunction(input)
    console.log(`Does ${test} equal ${expectedOutput}? ${ (_.isEqual(test, expectedOutput)) ? 'yes' : 'no' }`)
}