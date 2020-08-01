let score = '101';

// explicit type conversion
console.log(typeof (score)); //returns data type

console.log('Add 101 + 12: before type cast>', score + 12); //concatintes

score = Number(score); //type cast to int
console.log(typeof (score));
console.log('Add 101 + 12: after type cast>', score + 12);

let res = String(score);
console.log(res, typeof (res));

res = Boolean(score);  //+ve,-ve numbers > true,  0 > false 
console.log(res, typeof (res));

//implicit tyoe conversion(loose type conversion)
console.log(score == 101);
// implicit type conversion from string to number