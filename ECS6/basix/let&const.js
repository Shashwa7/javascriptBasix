//we don't use 'var' naymore for delcaring varibles the better alternatives are const and let, we mostly use const while declaring functions and varibles that we want to be static troughout the program which can't be manipulated or re-initialized.
//and we use let while declaring normal varibles. which can be manipulated

// const player = "rock";
// let score = 1200;
// let proStatus = false;


// if(score > 970){
//     proStatus = true;
// }

// console.log("pro status: ", proStatus);

//var vs let

//var
var stat = true;
if(12 > 3){
    var stat = false;
    console.log('before:', stat);
}
console.log('after:', stat); 
// both stat will be reintialised to false;


//let
let stat2 = true;

if(12 > 3){
    let stat2 = false;
    console.log('before:', stat2);
}
console.log('after:', stat2); 
//here both stat2 will not be re-initalised, so 'let' basically creates new scope for the varible, and this prevents overwrting of values.

/* we can't define 2 variables with same name using 'let' in the same scope */
let name = 'rock';
let name = 'hugo'; //throws error

/* but we can define 2 variables with same name using 'var' in the same scope   */
var name2 = 'hello';
var name2 ='bye'; 

/*name2 will be intialized with the latest updated value that is 'bye' */