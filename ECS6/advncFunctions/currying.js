//currying is concept or process of coverting a function such a way that it takes multiple arguments one at a time

const multiply = (a, b) => a * b;
const curryMultiply = (a) => (b) => a * b;

multiply(2, 4);
curryMultiply(4)(12); //curryMultiply(a)(b)

/*
curryMultiply explain:
> initially takes 'a' as parameter.
> has a child function that takes 'b' as a parameter and performs a*b and returns the product result.
*/

/*expanded form for curryMultiply()*/
const multiply = (a) => {
    const x = (b) => {
        return b * a;
    }
    return x;
}

const result = multiply(3); //multiply(a) returns x(b);
result(7);//x(b) === result(b)

//return 7 * 3 = 21;


/*What is the use of this concept? 

> we can use such functions to define new fucntions, where every newly derived functions can perform different  operations on a sigle data.

> consider a player in a game, you wanna update his score('only his score') board after every gameplay.
*/


const player = (name) => (score) => `${name} has scored ${score}`;

const gameplay = player('Rock');
console.log(gameplay(1230)); //gameplay 1
console.log(gameplay(1302)); //gameplay 2