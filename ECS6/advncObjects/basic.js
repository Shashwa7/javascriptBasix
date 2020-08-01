//reference type

const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };

//some conditions tests
//1. obj1 === obj2 //true
//2. obj1 === obj3 //false
/*
                ::: NOTES :::
whenever we create object its reference and values are stored somewhere in memory, consider a box which store all info about the obj like properties, values and the address.
So, here we have created 3 objects obj1 has the property 'value' with the value of '10', and obj2 has a copy of obj1 which mean any change in the properties or values associated with the obj1 will also reflect in obj2, basically both are sharing the same box but here obj3 is initialised seperatly, so no matter if the values and the properties are alike obj1 they are in different boxes which eventually makes them unique individually. So, they're technically different even by possessing the same property name and the same value. And as we know that almost everything in JS is simply an object, this protocol goes for all. 

*/
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

//tests for arrays
// is arr1 === arr2 // false
// we know why? !

//INSTANTIATION

/*
so when we have to create 100s of objects then the most practical and efficient approach is nothing but classes, which basically defines a common structure/ template for objects which are instantiated using constructor function associated with that particular class

> Class name must start with an uppercase letter.
*/

/*
what does 'this' keyword means?

>generally if you console.log(this), will result as 'window' object.
So (this === window) true, hence by default 'this' is in the context and the under the scope  of window.

> So, 'this' is defined on the basis of the context of its parent scope.

>Suppose, const obj ={
     func(){
          console.log(this);
     }
}

// if you type obj.func(), this will return {func: ƒ}, hence here 'this' is in the context of the function 'func()' not in the scope of window.

*/

class Dog {

    constructor(breedName, identity, lifeSpan, coatColor) {
        this.breedName = breedName;
        this.identity = identity;
        this.lifeSpan = lifeSpan;
        this.coatColor = coatColor;
        console.log('Dogo', this);
        //the abv stmt will basicall console log the instantiated dog object. 'this' keyword refers to the instance the new object is created.

        /*
        it will look somthing like this below for each instance of the class
        Dogo> Dog {breedName: "Germane Shepherd", identity: "Murphy", lifeSpan: 12, coatColor: Array(2)} //1st instance 
        Dogo> Dog {breedName: "Labrador", identity: "Leo", lifeSpan: 11.5, coatColor: Array(5)} //2nd instance
        Dogo> Dog {breedName: "Beagle", identity: "Matt", lifeSpan: 8, coatColor: Array(5)}  //3rd instance
        */
    }

    introduce() {
        console.log(`Hello Pal, I am ${this.identity}!`)
    }
}


const dogo1 = new Dog('Germane Shepherd', 'Murphy', 12, ['brown', 'black']);
const dogo2 = new Dog('Labrador', 'Leo', 11.5, ['brown', 'black', 'grey', 'golden', 'off-white']);
const dogo3 = new Dog('Beagle', 'Matt', 8, ['brown', 'black', 'red-white', 'brown-white', 'white']);

const myPets = [dogo1, dogo2, dogo3];

dogo1.introduce();  //Hello Pal, I am Murphy!
console.log(myPets);

