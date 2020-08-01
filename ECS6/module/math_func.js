//Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. 

//In order to share it with these other files, you first need to export it.

//2 ways to export the modules

/*1
export const add = (x, y) => {
    return x + y;
  }*/

//2
const add = (x, y) => {
    return x + y;
  }
  
export { add };