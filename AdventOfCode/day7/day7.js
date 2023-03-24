const testData = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split(/\n/);

const fs = require('fs')
const inputData = fs.readFileSync(__dirname+'/day7.txt', 'utf8').split(/\r\n/)

//commands  $ cd /, $ ls, $ cd, $ cd ..

class Dir {
    constructor(name, parentDirName){
        this.name = name;
        this.type = "dir";
        this.parent = parentDirName;
        this.children = [];
        this.size = 0;
    }

    //list children of directory
    listChildren(){
        return `${this.children.map(child => console.log(child))}`;
    }

    //return the total size of all files in current directory
    totalSize(){
        this.size = this.children.reduce((a,b) => a.size + b.size)
    }

}

class Files {
    constructor(name, size, parentDirName){
        this.name = name;
        this.size = size;
        this.parent = parentDirName;
        this.type = name.slice(name.indexOf("."));
    }
}

//commands  $ cd /, $ ls, $ cd, $ cd ..
//names 29116 f, dir a
class Menu {
    constructor(){
        this.topDir = new Dir("Root",null);
        this.currentDir = this.topDir;
        this.results = 0;
        this.currentMax = 30000000;
    }

    //read commands
    start(data){
        data.map(command => {
            console.log()
            //parse command into sections:  files: [0] is file size, [1] is file name; dir: [0] is dir, [1] is name;
            //commands: [0] is $, [1] is either ls or cd, [2] is the target dir if the command is cd
            let splitCommand = command.split(" ");  
            
            //log the command, the directory name and all children
            console.log(command, this.currentDir.name, this.currentDir.children.map(child => child.name),"\n")
            
            //log the command split into an array
            console.log(splitCommand)

            switch (true){

                //new file or dir
                case (splitCommand[0]!== "$"):
                    if(splitCommand[0]=="dir"){
                        //add directory to list of children
                        this.currentDir.children.push(new Dir(splitCommand[1],this.currentDir));
                    }else{
                        //add file to list of children
                        this.currentDir.children.push(new Files(splitCommand[1],+splitCommand[0],this.currentDir));
                    }
                    break;

                //commands

                    //list
                case (splitCommand[1]=="ls"):
                    this.currentDir.listChildren();
                    break;

                //copying root dir:

                    //change directory
                case (splitCommand[1]=="cd"):
                    
                    if(( this.currentDir != "undefined") && this.currentDir.name == "Root") this.topDir = this.currentDir.children;
                    //start
                    if(splitCommand[2]=="/"){
                        console.log("start")
                        break;

                    //back
                    }else if(splitCommand[2]==".."){
                        this.currentDir = this.currentDir.parent;
                        break;
                    }
                    
                    //change to specific directory
                    let target = this.currentDir.children.filter(object => object.name == splitCommand[2])
                    this.currentDir = target[0];
                    break;
                default:
                    console.log("error parsing line")
            }

        })
        //display results
        this.end();
    }

    // display the results
    end(){
        console.log(this.topDir)
        this.topDir.size = this.sumSize(0,this.topDir);
        console.log("Part 1 Results:", this.results)
        console.log("Part 2 Space to delete:", this.currentMax)
        
    }
    
    //[ [a: 5, [b: 5],c: 5;], d: 5, [e: 5, f: 5]]
    //          >dir total:30, results 70
// [0]              >dir    total: 15, results 20"
// [0][0]               >total:5
// [0][1]               >dir total:10, results 5
// [0][1][0]                >total:5
// [0][2]               >total 15
// [1]              > total: 20
// [2]              > dir   total:30, results 50
// [2][0]               >total: 25
// [2][1]               >total: 30

    //sum the size of each child in a given directory
    sumSize(total, array){

        // find size of each child, whether directory or file, add it to the total
        array.map(child => {

            //find sum of directories
            if(child instanceof Dir){
                //recursion ftw
                let temp = this.sumSize(0,child.children)
                child.size = temp;
                total += temp;
                if(temp<=100000){
                    this.results += temp;
                    console.log(child.name, "size:", temp)
                }      
                if(temp >= 8748071 && temp < this.currentMax){
                    this.currentMax = temp;
                }
                
                //find sum of files
            }else if(child instanceof Files){
                total += child.size;
            }
        })
        return total;
    }

}

let elf = new Menu();
elf.start(inputData);


// - / (dir)                     x
//   - a (dir)                  <
//     - e (dir)                <
//       - i (file, size=584)   
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)                    x
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)

