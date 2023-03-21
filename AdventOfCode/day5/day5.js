//  stacks as given by challenge

//     [H]         [H]         [V]    
//     [V]         [V] [J]     [F] [F]
//     [S] [L]     [M] [B]     [L] [J]
//     [C] [N] [B] [W] [D]     [D] [M]
// [G] [L] [M] [S] [S] [C]     [T] [V]
// [P] [B] [B] [P] [Q] [S] [L] [H] [B]
// [N] [J] [D] [V] [C] [Q] [Q] [M] [P]
// [R] [T] [T] [R] [G] [W] [F] [W] [L]
//  1   2   3   4   5   6   7   8   9 

const stacksPart1 = {
    '1': [ 'R', 'N', 'P', 'G' ],
    '2': ['T', 'J', 'B','L', 'C', 'S','V', 'H'],
    '3': [ 'T', 'D', 'B', 'M', 'N', 'L' ],
    '4': [ 'R', 'V', 'P', 'S', 'B' ],
    '5': ['G', 'C', 'Q','S', 'W', 'M','V', 'H'],
    '6': ['W', 'Q', 'S','C', 'D', 'B','J'],
    '7': [ 'F', 'Q', 'L' ],
    '8': ['W', 'M', 'H','T', 'D', 'L','F', 'V'],
    '9': ['L', 'P', 'B','V', 'M', 'J','F']
  }

  const stacksPart2 = {
    '1': [ 'R', 'N', 'P', 'G' ],
    '2': ['T', 'J', 'B','L', 'C', 'S','V', 'H'],
    '3': [ 'T', 'D', 'B', 'M', 'N', 'L' ],
    '4': [ 'R', 'V', 'P', 'S', 'B' ],
    '5': ['G', 'C', 'Q','S', 'W', 'M','V', 'H'],
    '6': ['W', 'Q', 'S','C', 'D', 'B','J'],
    '7': [ 'F', 'Q', 'L' ],
    '8': ['W', 'M', 'H','T', 'D', 'L','F', 'V'],
    '9': ['L', 'P', 'B','V', 'M', 'J','F']
  }

  // formatting given stacks into object and arrays
                    // for (let index = 1; index < 10; index++) {
                    //     stacks[index] = stacks[index][0].split("");
                    // }
                    // console.log(stacks)

//replace words and space with letters to denote movement   a=move, b=from c=to

const fs = require('fs');
const data = fs.readFileSync(__dirname+'/day5.txt', 'utf8')
//replace words and space with letters to denote movement   a=move, b=from c=to
//split into arrays of numbers where non-digit characters are replaced with commas
const moveList = data.split('\r\n').map(line => line.replace(/move /,"")).map(line => line.replace(/ from /,"b")).map(line => line.replace(/ to /,"c")).map(line => line.split(/\D/));


let howMany;
let fromWhere;
let toWhere;

// for each line in the list
moveList.map(line => {
   
    //how many to move a
    howMany = line[0]
    //from where b
    fromWhere = line[1]
    //to where c
    toWhere = line[2]

    //part 1:
    //move boxes 1 at a time
    for(let i = 0; i < howMany; i++){
        stacksPart1[toWhere].push(stacksPart1[fromWhere].pop())
    }

    //part 2:
    //move boxes in groups of howMany
    stacksPart2[toWhere].push(...stacksPart2[fromWhere].splice(-howMany))

})

console.log("Part One:", stacksPart1)
console.log("Part Two:", stacksPart2)

//1st try HBTMTBSDC   correct

//2nd part   WQVBQDMVH incorrect

            //PQTJRSHWS
