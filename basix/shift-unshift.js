const arr = [1,2,3,4,5];

//arr.pop() pops the element from the end
//but
//arr.shift() pops the element from the front 
var firstElement = arr.shift();
console.log(firstElement);
console.log(arr);


//arr.push() appends/pushes the element to the rear part of the array
//but
//arr.unshift(x) pushes the element 'x' at the front of the array 
//arr.unshift() with 'no arg' or event with the arg thorws the length of the array similary like arr.length
console.log("length: ",arr.unshift());
console.log("length: ",arr.length);

arr.unshift(1);
console.log(arr);

