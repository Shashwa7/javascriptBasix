//idempotent functions are the functions where the output is predictable and unchanged.
//no matter how mant time you call them the putpu remain the same

//ex:

const greet = () => console.log('hello');

//no matter how many time you call greet the o/p remains the same.

greet();
greet();

//ex:3
const sqr = num => num * num;

console.log(sqr(2)); //2 will always give 4
console.log(sqr(3)); //3 will always give 9
//exp2:

let x = -50;
console.log(Math.abs(x)); //o/p: 50
console.log(Math.abs(Math.abs(x))); //o/p: 50

//so why do we need idempotent func?  cuz we know one thing if the func is idempotent the o/p is predictable.
