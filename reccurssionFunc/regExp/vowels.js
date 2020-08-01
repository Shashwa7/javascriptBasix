
const name = 'uoeuf';
const regX = /^([aeiou]).*\1$/i;

let result = regX.test(name);
console.log(result);