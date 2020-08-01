//another method we have is flatMap() which basically gives user a functionalty to use the original array values/data  alongside with the functionality of the flat() which we'v elearned before.

const myPets = ['dog', ['parrot', 'sparrow'], 'pig', 'horse', 'elephant'];

//let say I want to keep them hydrated during summer time. So, I am giving them some water to drink.

const hydrateMyPets = myPets.flatMap(pet => pet + ' Water bowl');

console.log(hydrateMyPets);
/*
o-p::
 (5) ["dog Water bowl", "parrot,sparrow Water bowl", "pig Water bowl", "horse Water bowl", "elephant Water bowl"]

*/