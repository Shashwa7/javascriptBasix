//primitive type
let x = 20;
let y = x;
console.log('-- Primitive type --');
console.log('Before Change: ',x,y);

x = 30;
console.log('After change: ',x, y);

//reference type

let userA = {
    name: 'Shashwa7',
    ID: 'afx21*',
    email: 'shashwa7@yahoo.com'
}
let userB = userA;

console.log('-- Reference type --');
console.log('Before change: ', userA, userB);

userA['name'] = 'Vinyl';
console.log('After change: ', userA, userB);