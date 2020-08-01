//2 different ways of creating an array object

//traditional way
const fruits = ['apple','cherry','guava'];

//using array constructor
const veggie = new Array('carrot','onion', 'eggplant'); 

//similary we can define all sorts of objects using constructor as well

//traditional way(empty obj);
const objA = {}

//using object constructor
const objB = new Object();

//similarly with string

const name = 'shashwat'; //tmp wrapper object
const lastName = new String('tripathi'); //proper object

/*
                        ::: Note :::

> we've been told that everything in JS is an object but its not true because when we declare a primitive value like string we can't see any related properties as seen in normal objects like array,dates,objects etc but still we are able to use  certain methods like length, touupercase etc with our string literals, and this is possible because javascript takes such primitive values and it wraps it temporarily in a wrapper object and that object will be the thing that actually has the methods and once we done using these methods/property, JS un-wrpas  the primitive value from the wrapper object convert them back to common string.

> but when we declare any string using string constructor then it is defined as the string object, not like any common string which are temp wrapped in string object.

*/

//same with numbers
const num1 = 12;  //12
const num2 = new Number(21); //Number {21}

//same with booleans
const bool1 = false; //false
const bool2 = new Boolean(true); //Boolean {true}


/*
Conclusion:

> wkt all object have methods and properties.
> not everything in JS is object but pretty much everything can behave like one by getting wrapped in tmp obj.

> the only primitive types that doesn't have any wrapper obj or constructor declaration is 'null' and 'undefined'.
*/

