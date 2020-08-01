class User{

    constructor(name, email){
        this.userName = name;
        this.userEmail = email;
    }

    login(){
        return `${this.userName} hass logged in!`;
    }
    logout(){
        return `${this.userName} hass logged out!`;
    }
}

//If we are definig some addtional/new properties and functions  or let say constructor() for the Admin class, here  super() method helps in reusing parent class constructor() properties so that we don't have to re-write it.

const user1 = new User('Hugo','hugo.12@gmail.com');
//User {userName: "Hugo", userEmail: "hugo.12@gmail.com"}
const user2 = new User('Maya','may7@gmail.com');

class Admin extends User{

    
    constructor(name, email, designation){
        super(name, email); //attach these values to the 'User' constructor properties.
        //note: it is must to call super() prior to any additional properties, otherwise it will throw an error.
        //So, super() method always first like ladies first!

        //addtional property
        this.designation = designation;
    }

    //additional properties
    deleteUser(dltUser){
        users = users.filter(user => user.userName !== dltUser.userName);
    }
}


const admin1 = new Admin('S7','shashwa7@yahoo.com','database operator');
//{userName: "S7", userEmail: "shashwa7@yahoo.com", designation: "database operator"}

//array objects
let users = [user1, user2, admin1];
console.log(users);

admin1.deleteUser(user2);