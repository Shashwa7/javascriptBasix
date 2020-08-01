//Instead of re -writing the same code again and again for creating objects, class is a better option to go for- which can be used as a templet to create objects using constructor function.

// constructor function is the thing that actually constructs objects of the particular class type.


class User {

    constructor() {
        //set up properties
        this.userName = 'mario';
    }
};

//Here User class has constructor function that helps in creating object instance with the property of 'userName' and with the static value of 'mario'.
const user1 = new User();
const user2 = new User();

//what is the 'new' keyword ?
// 1- it creates a new empty object {} ~ with no properties
// 2- it binds the  passed value of 'this' to the new empty object
// 3 - Finally, it calls the constructor function to 'build' the object.

//constructor with argumnents
//here the class constructor's properties are quite dynamic, and so we can create unique objects with unique values.
class player {

    constructor(name, score, stat) {

        this.plyrName = name;
        this.plyrScore = score;
        this.plyrStat = stat;
    }
};

const player1 = new player('Hugo', 9439, 'Pro');
//player {plyrName: "Hugo", plyrScore: 9439, plyrStat: "Pro"}
console.log(player1.plyrName);  //"Hugo"

//class with functions

class facebook {

    constructor(name, password, valid) {
        this.name = name;
        this.password = password;
    }
    //function are defined outside the constructor but within the class
    //  Now notice this is a regular function using shorthand notation and we use regular functions because our functions don't bind a value to that this keyword when the called.
    //and if we used an arrow function here, 'this' inside the function itself would refer to the window object.
    login() {
        console.log(`${this.name} has logged in!`);
        return this; //imp for chaining functions
    }
    logout() {
        console.log(`${this.name} has logged out!`);
        return this; //imp for chaining functions 
    }
}

const user3 = new facebook('Leo', 'jinx21');
user3.login(); //Leo has logged in!
user3.logout();  //Leo has logged out!

//or if you want to chain these functions like 'user3.login().logout()' you must return the object in each of the functions using 'this' keyword- which references the particular object that has invoked the function.
//or else will throw 'undefined' error as we know if nothing is returned JS returns 'undefined' by default.

const user4 = new facebook('Marq', 'hello3rl');
user4.login().logout();