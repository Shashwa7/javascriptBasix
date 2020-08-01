/*
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

*/

//create date object;

const date = new Date();
console.log(date); // display cuurent date and time

// initialize date
//month 0 - 11; 0 -> Jan 11 -> Dec
const date2 = new Date(2020,5,2);
console.log(date2);

const date3 = new Date('June 2, 1998');
console.log(date3);
