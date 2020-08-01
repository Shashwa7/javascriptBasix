//constructor w/d class
function Users(name, email) {
    this.userName = name;
    this.userEmail = email;
}
Users.prototype.login = function () {
    console.log(`${this.userName} has logged in!`);
}
Users.prototype.logout = function () {
    console.log(`${this.userName} has logged out!`);
}

//creating other constructor that will inherit User constructor
function Admin(name, email, designation) {
    //here we can't use super to inherit constructor func
    //.call(object reference, parameters) is used,
    //whenever we create object of type 'Admin', 'this' will reference 'Admin' as a object constructor function so that the resultant object will be an 'Admin' type not 'Users' type.Even though we are inheriting from 'Users'.
    Users.call(this, name, email);
    this.userDesignation = designation; //extra attribute
}
//here we still not inheriting methods from the parent constructor, in  order to do that we have to copy the proto refernce of the parent constructor into the child constructor.

//now essetially we have copy of Users prototype in Admin prototype. 
Admin.prototype = Object.create(Users.prototype);
Admin.prototype.deleteUser = function (dltUser) {
    users = users.filter(user => {
        if (user.userName !== dltUser.userName)
            return user;
    })
};

let users = [];
const user1 = new Users('hugo', 'hd@dek.com');
const user2 = new Users('pego', 'ped@kd.com');
const user3 = new Users('maya', 'dj@dk.com');
const admin = new Admin('shaun', 'shn21@hdm.com', 'dbAdmin');

users = [user1, user2, user3];
console.log(users);

admin.deleteUser(user2);
console.log(users);


//exclusive prototypes declaration for classesr
//calculating area of bith rec and sqr just using one function
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}


 Rectangle.prototype.area = function() {
   return this.w * this.h;
}

class Square extends Rectangle {

    constructor(w) {
        super(w,w);
        //this.w = w;
        //this.h = w;
    }
}

   const rec = new Rectangle(3, 4);
   const sqr = new Square(3);

    console.log(rec.area()); //3 * 4
    console.log(sqr.area()); // 3 * 3