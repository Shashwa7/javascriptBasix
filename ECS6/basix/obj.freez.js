// So as we have seen earlier that const object can't be re-initialised but its propertices can be manipulted.
//in order to prvent this we have 'Object.freeze(obj)' function that will lock all the object properties and further can't be manipulated.

//one can define property name without the ''
const fruit = {
    name: 'apple',
    color: 'red',
    vitamin: 'A'
};

Object.freeze(fruit);
fruit.name = 'cherry'; //this will not throw any error but  will be ignored and hence the fruit name property remains 'apple'.