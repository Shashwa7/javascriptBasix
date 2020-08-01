//currying: basically taking func with multiple parameter and converting it into a func that takes one parameter at a time

const multiply = (a, b) => console.log(a*b);
multiply(2,3);

//here we are giving 1 parameter at a time
const curryingMultiply = (a) => (b) => a*b;
console.log(curryingMultiply(5)(3));

//why use currying? helps in creating multiple custom utility funcs out this single func, saves memory space as we are not creating multiple functions for every new input.Here we can define one input and in later program we can introduce parameters for  invoking the sub/child func.

//by this practice we don't have to invoke the func completely but rather just the child/sub func 

const multiplyBy5 = curryingMultiply(5);
const multiplyBy121 = curryingMultiply(121);

//later in the program If i wanna multiply thousands of data by '5', i don't have to create a sperate func but instead we will utilise the 'mulitplyBy5' func which we defined earlier in the program

const datas = [12, 4, 5, 10, 7];
const updatedDatasx5 = datas.map(data => multiplyBy5(data));
const updatedDatasx121 = datas.map(data => multiplyBy121(data));
console.log(updatedDatasx5);
console.log(updatedDatasx121);
