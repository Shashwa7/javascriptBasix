const myFvtFruit = {
    "name" : 'Apple',
    "color" : 'Red',
    "vitamin": 'A'
};

console.log(myFvtFruit['name']);
//to check if the mentioned property is present in the object or not
//obj.hasOwnProperty returns  bool value;
console.log(myFvtFruit.hasOwnProperty('name')); //true
console.log(myFvtFruit.hasOwnProperty('shape')); //false

function checkProperty(obj, property){
    if(obj.hasOwnProperty(property))
        return obj[property];
    else
        return "Not Found!";
};

console.log(checkProperty(myFvtFruit,'color'));
console.log(checkProperty(myFvtFruit,'origin'));
