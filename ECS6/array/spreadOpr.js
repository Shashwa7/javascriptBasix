/*ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

the spread operator unpacks all contents of an array into a comma-separated list
*/

//spread syntax for arrays

let a = 12;
let b = 8;
let c = 142;

console.log(Math.max(a,b,c));

//here Math.max(x,y,z), is expecting 3 regular varibles.

//but if we want it this func to work with array the approach will be different

let arr = [21,2,98];
console.log(Math.max(arr[0],arr[1],arr[2])); //this works fine
//this is not a good apprroach if array consist of many elements.

//but now if we try to directyl apply Math.max() on array then it won't work
console.log(Math.max(arr)); //returns NaN - not a number
//alternative right syntax that will work but not very convienient
console.log(Math.max.apply(null,arr));

//Solution: passing array in the form of variable length/ in spread-out format

console.log(Math.max(...arr)); //this works beautifully.

//...arr returns an unpacked array. In other words, it spreads the array. hypothetically with commas between each elements. Math.max(..arr) === Math.max(21, 2, 98);


//Copying one array to other
const sheeps = ['Apple', 'Banana', 'Juice'];

// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];


//spread syntax for objects

const person = { name: 'mario', age: 19, sex: "M"};

//now we want to clone this obj which mean not a refernce/pointer to this obj but rather a brandnew copy of the same object 

//we don't want this
const referPerson = person;

//we want this
//bonus: we can add our own property as well
const twinPerson = {...person, twin: true};

console.log("Orginal person:",person);
console.log("Refernced person:", referPerson);
console.log("Twin person: ",twinPerson);