//storing data in local storage
//note: everything is stored as string
//inorder to check the local storage data: inspect> Application> Local Storage;

// .setItem('key','value');

localStorage.setItem('plyrName', 'mario');
localStorage.setItem('plyrScore', 1238120);
//we will not lose data even if we close or refresh the browser
//get data from the local storage

let player = localStorage.getItem('plyrName');
let score = localStorage.getItem('plyrScore');

console.log(player, score);

//update local storage data
//2 ways
localStorage.plyrName = 'hugo'; //replaces 'mario'
localStorage.setItem('plyrScore', 32193);

//reinitializing vars
player = localStorage.getItem('plyrName');
score = localStorage.getItem('plyrScore');

console.log(player, score);


//remove items from local storage
localStorage.removeItem('plyrScore');
//remove evrything from local storage
localStorage.clear();

player = localStorage.getItem('plyrName');
score = localStorage.getItem('plyrScore');

console.log(player, score); // null null 