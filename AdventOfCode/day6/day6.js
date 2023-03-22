
const fs = require('fs');
const data = fs.readFileSync(__dirname+'/day6.txt', 'utf8')

//detect start-of-packet marker     four characters that are different

let countpart1;
let countpart2;
let markerTestPart1;
let markerTestPart2;

for (let i = 0; i < data.length; i++) {


    markerTestPart1 = data.slice(i, i + 4);
    markerTestPart2 = data.slice(i, i + 14);
    if(!countpart1){
        //start of part 1
        if (markerTestPart1.indexOf(markerTestPart1[0], 1) < 0) {
            //0,1
            // console.log(`no ${markerTestPart1[0]} in ${markerTestPart1} after 0`);
            if (markerTestPart1.indexOf(markerTestPart1[1], 2) < 0) {
                //1,2
                //   console.log(`no ${markerTestPart1[1]} in ${markerTestPart1} after 1`);
                if (markerTestPart1.indexOf(markerTestPart1[2], 3) < 0) {
                    //2,3
                    // console.log(`no ${markerTestPart1[2]} in ${markerTestPart1} after 2`);
                    if (markerTestPart1.indexOf(markerTestPart1[3], 4) < 0) {
                        //3,4
                        if (!countpart1) {
                            countpart1 = i + 3;
                            console.log("part 1 match found",markerTestPart1.slice(0, 4),i,countpart1 + 1);
                        }
                    }
                }
            }
        }
    }else{

        //start of part 2
        if (markerTestPart2.indexOf(markerTestPart2[0], 1) < 0) {
            //0,1
            // console.log(`no ${markerTestPart2[0]} in ${markerTestPart2} after 0`);
            if (markerTestPart2.indexOf(markerTestPart2[1], 2) < 0) {
                //1,2
                //   console.log(`no ${markerTestPart2[1]} in ${markerTestPart2} after 1`);
                if (markerTestPart2.indexOf(markerTestPart2[2], 3) < 0) {
                    //2,3
                    // console.log(markerTestPart2.indexOf(markerTestPart2[2], 3));
                    if (markerTestPart2.indexOf(markerTestPart2[3], 4) < 0) {
                        //3,4

                        if (markerTestPart2.indexOf(markerTestPart2[4], 5) < 0) {
                            //4,5
                            if (markerTestPart2.indexOf(markerTestPart2[5], 6) < 0) {
                                //5,6
                                //   console.log(markerTestPart2.indexOf(markerTestPart2[5], 6));
                                if (markerTestPart2.indexOf(markerTestPart2[6], 7) < 0) {
                                    //6,7
                                    if (markerTestPart2.indexOf(markerTestPart2[7], 8) < 0) {
                                        //7,8
                                        if (markerTestPart2.indexOf(markerTestPart2[8], 9) < 0) {
                                            //8,9
                                            if (markerTestPart2.indexOf(markerTestPart2[9], 10) < 0) {
                                                //9,10
                                                if (markerTestPart2.indexOf(markerTestPart2[10], 11) < 0) {
                                                    //10,11
                                                    if (markerTestPart2.indexOf(markerTestPart2[11], 12) < 0) {
                                                        //11,12
                                                        if (markerTestPart2.indexOf(markerTestPart2[12], 13) < 0) {
                                                            //12,13
                                                            if (markerTestPart2.indexOf(markerTestPart2[13], 14) < 0) {
                                                                //13,14
                                                                countpart2 = i + 13;
                                                                console.log("part 2 match found",markerTestPart2,countpart2 + 1);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


//add one to fix OBO error
console.log("part1:", countpart1+1)
console.log("part2:", countpart2+1)
//number of characters from beginning to end of first marker

//1st part     1261  incorrect  (obo error, correct:1262)

//2nd part 3444 correct
