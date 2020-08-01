//refer protoProperty.txt article for more info

//constructor with class

class users {

    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        console.log(`${this.username} has logged in`);
        return this;
    }

    logout() {
        console.log(`${this.username} has logged out`);
        return this;
    }
}


const user1 = new users('Shashwat', 'shashwa7@yahoo.com');
//usually whenever we use constructor with the class javascript automatically take these methods and adds them inside the object '__proto__' property.

//but when we are using just the constructor that is without the class then defined functional properties/methods are not stored in the __proto__ of the object.

//constructor without the class
function Users(username, email) {
    this.username = username;
    this.email = email;

    // this.login = function () {
    //     console.log(`${this.username} has looged in!`);
    // } we are using protype model instead defined below
}

const user2 = new Users('Hugo', 'hugo122gmail.com');

//here we observe that the defined function 'login' is not stored in the '__proto__' of the object user2.

//inorder to store the defined methods in the proto property follow as instructed

Users.prototype.login = function () {
    console.log(`${this.username} has looged in!`);
    return this;// for method chaining
}
Users.prototype.logout = function () {
    console.log(`${this.username} has looged out!`);
    return this; // for method chaining
}

//now we can see that the method 'login' has been added to the user2's __proto__;

//note::but if you are good with class concepts then no need to worry about this!!
