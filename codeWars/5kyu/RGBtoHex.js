/*
https://www.codewars.com/kata/513e08acc600c94f01000001

Description:

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/


const t = require('../testFunction')

function rgb(r, g, b){
    // complete this function  
    for(let i = 0; i<arguments.length;i++){
      if(arguments[i]>255){
        arguments[i] = 255
      }if(arguments[i]<0){
        arguments[i]=0
      }
    }
    return r.toString(16).padStart(2,0).toUpperCase() + g.toString(16).padStart(2,0).toUpperCase() + b.toString(16).padStart(2,0).toUpperCase()
  }

 console.log(`"${rgb(255,255,255)}" is deeply equal to FFFFFF: ${rgb(255,255,255)==="FFFFFF"}`)
 console.log(`"${rgb(255,255,300)}" is deeply equal to FFFFFF: ${rgb(255,255,255)==="FFFFFF"}`)
 console.log(`"${rgb(0,0,0)}" is deeply equal to 000000: ${rgb(0,0,0)==="000000"}`)
 console.log(`"${rgb(255,255,255)}" is deeply equal to FFFFFF: ${rgb(148,0,211)==="9400D3"}`)
 