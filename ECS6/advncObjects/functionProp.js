
//ecs5 way
const person = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

// With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

//ecs6 way
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};