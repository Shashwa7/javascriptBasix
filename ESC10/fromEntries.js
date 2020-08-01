//Object.fromEntries() basically converts the array into objects 

const myPets = [['dog', 'murphy'], ['cow', 'maya'], ['parrot', 'popat']];

const myPetsObj = Object.fromEntries(myPets);

/*
o-p::
{dog: "murphy", cow: "maya", parrot: "popat"}

cow: "maya"
dog: "murphy"
parrot: "popat"

 */

/* Rverting back to array format, we can us Object.entries() */

const myPetsArr = Object.entries(myPetsObj);
console.log(myPetsArr);

/*
o-p::

[Array(2), Array(2), Array(2)]
0: (2) ["dog", "murphy"]
1: (2) ["cow", "maya"]
2: (2) ["parrot", "popat"]
*/

