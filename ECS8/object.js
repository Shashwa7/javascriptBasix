//2 new methods .values and .entries

const myPet = {

    name: 'Murphy',
    breed: 'German Shepher',
    color: 'black and brown'
}


//genrally we loop through objects using Object.keys() method
//this basically type cast our object into array so that we can use foreach to iterate thrugh it
Object.keys(myPet).forEach(key => {
    console.log(key, myPet[key]);
});

//key - is the property name and myPet[key] is the value assocaited with that property.
/* o/p::
key   myPet[key];
name  Murphy
breed German Shepher
color black and brown
 */


//using new methods

//object.values will return all value associated with the object
Object.values(myPet).forEach(value => console.log(value));

/*
o/p::

Murphy
German Shepher
black and brown
 
*/

//similarly object.entries will return the each key along with its value in array format

Object.entries(myPet).forEach(key => console.log(key));

/*
o/p::
key       value
["name", "Murphy"]
["breed", "German Shepher"]
["color", "black and brown"]
*/

/* Aync wait is another functionality which we will learn  as a new topic */