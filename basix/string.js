//concationation

let fName = 'Shashwat ';
let lName = 'Tripathi';
console.log(fName, lName);
let fullName = fName + lName;

console.log(fullName);

//getting character
console.log(fullName[3]);


//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let index = fullName.indexOf('t'); // will throw 7
console.log(index);
index = fullName.lastIndexOf('t');
console.log(index);

//string slice method to fetch string in chunks
//slice(start index, end index);
let res = fullName.slice(0,5); // [0,5) == [0,4]
console.log(res); //Shash

//substring
//substring(start index, total chars);
res = fullName.substring(0,8);
console.log(res);

