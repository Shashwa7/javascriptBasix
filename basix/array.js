//string
let fruits = ['apple', 'mango'];
console.log(fruits);

//numbers
let prime = [2, 3, 5, 7];
console.log(prime)

// bool
let choice = [true, false];
console.log(choice);

//mix
let mix = ['apple', 7, 'grape', true];
console.log(mix);
console.log(mix[2]);


//array methods
console.log(mix.length);

//join the mention string after every item in array
let res = mix.join(',');
console.log(res);

res = mix.indexOf('apple');
console.log(res);

//adding element in array
res = mix.concat(['kiwi', 'cherry']);//apends
console.log(res);
console.log('original array not altered: ' + mix);

//push method will update the original array also
res = mix.push('carrot');
console.log('returns the index of the added item: ' + res);
console.log('original array aletered: ' + mix);

//to deleted from the tail
res = mix.pop();
console.log('popped item: '+res);
console.log('updated array: '+mix);

