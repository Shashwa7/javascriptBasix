//imperative vs declaarive functions

//imperative func: here we  tell what to do and how it should be done.(line by line instruction)
//decalrative func: here we tell what to do and what should be done. (not instructing it line by line in order to achieve some results, just giving data and receiving output as intended)

//functioanl programing is more declarative in nature

//so lets create 2 diff func to perform some operations on the array, like doubling all inputs

//imperative implementation
console.log('--- Imperative Implementation ---');
//normal func: has side effects
const imperativeFunc = arr => {
    for(let i = 0; i < arr.length; i++)
       arr[i] = arr[i]*2;
}

//declarative implementation
console.log('--- Decalrative Implementation ---');
const decalrativeFunc = arr => arr.map(item => item*2); //pure func

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

imperativeFunc(arr1);
let arr3 = decalrativeFunc(arr2);
console.log('Array 1: ', arr1);
console.log('Array 2: ',arr3);
