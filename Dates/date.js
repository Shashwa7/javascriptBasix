//dates

const now = new Date();
console.log(now);
console.log(typeof now);

//year, months, day, times
console.log("Year: ", now.getFullYear());
console.log("Month: ", now.getMonth());
console.log("Date: ", now.getDate());
console.log("Day: ", now.getDay());
console.log("Hours: ", now.getHours());
console.log("Minutes: ", now.getMinutes());
console.log("Seconds: ", now.getSeconds());


//timestamp
console.log('Timestamp: ', now.getTime());

//Date strings
console.log('String Representation of date:', now.toDateString());
console.log('String Representation of Time:', now.toTimeString());
console.log('String Representation of date:', now.toLocaleString());

//to display day name
var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

var day = now.getDay();
console.log("Day name: ", days[day]);
