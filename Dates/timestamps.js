const before  = new Date('May 1 2020 7:30:59');
const now = new Date();

console.log(before.getTime(), now.getTime());

const diff = now.getTime() - before.getTime(); //in ms;
console.log(diff);

//converting the ms into m, hr, days
const mins = Math.round(diff/(1000*60));
// 1 min = 60s & 1s = 1000ms
const hrs = Math.round(mins/60);
//1hr = 60m
const days = Math.round(hrs/24);

console.log('(diff) Mins: ',mins);
console.log('(diff) Hrs: ',hrs);
console.log('(diff) Days: ',days);


//converting time-stamps into dates objects
 const timestamp = 1588298459000;
 console.log(new Date(timestamp));