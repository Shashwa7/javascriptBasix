let email = 'shashwa7@yahoo.com';
let check = email.includes('@'); // retuen a bool value
console.log('Email contains @ : ', check); //true

let fruits = ['apple', 'kiwi', 'cherry'];
check = fruits.includes('mango');
console.log(check); //false

//Comparision operator
let age = 18;
console.log(age == 18); //true
age = 20
console.log(age != 18); //true

let name = 'rinshu';

console.log('String Comparision: ');
console.log(name == 'rinshu');
console.log(name > 'Shashwat');  //Shashwat has more char than Rinshi
console.log(name < 'Rinshu');  // R-upper is logically smaller than r-lower

//Strict vs loose Comparision

let gpa = 9.6;

//loose type (same values of different datatyoes can;t be equal)
//     int      String
console.log('loose Comparison');
console.log(gpa == '9.6');
console.log(gpa != '9.6');
//js is doing the string conversion

//strict compare (same values with same data types onlyl)
console.log('Strict comparision');
console.log(gpa === '9.6');
console.log(gpa === 9.6);
console.log(gpa !== '9.6');  //ofcourse type is different
// no type conversion occurs here
//better way for accurate coparision