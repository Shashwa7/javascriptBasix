//partial application: slightly different to currying
//in partial application type func unlike currying where we were expecting one parameter at a time here we expect the remaining parameters at a time, except the deinfed one obviously.


const multiply = (a,b,c) => a*b*c;
const partialMultiply5 = multiply.bind(null, 5); //there is no object to refer using 'this' keyword so the parameter will be 'null' and we have defined 'a = 5' rest of the parameters are not defined yet.
const curryingMultiply = (a) => (b) => (c) => a*b*c;

//calling func
const multiplyBy5 = curryingMultiply(5);
const totalA = multiplyBy5(3)(4); //passing one arg at a time not like(3, 4) 
console.log(totalA); 

//calling partial func 
const totalB = partialMultiply5(2,3);
//passing 2 args at a time
console.log(totalB);