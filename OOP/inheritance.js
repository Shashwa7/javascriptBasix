//reusability of code
//child class has all parent class properties and functionalities along with its own additional properties and functionalities 
//more control over certain fucntionality of some particular class inorder to maintain itegrity 

class User{

    constructor(name, pwd){
        this.username = name;
        this.userpwd = pwd;
    }

    login(){
        console.log(`${this.username} has logged in!`);
        return this;
    }
    
    logout(){
        console.log(`${this.userpwd} has logged out!`);
        return this;
    }
}

//exteding user class 
class Admin extends User{

    //extra methods and properties;
    //if the constructor func is not found here then JS will refer the constructor func of its parent class 'user'.
    deleteUser(user){
        
        //reinitalizing users array using filter method which returns objects not matching with the received object.
                             //u - iterator for object array   
        users = users.filter((u) => u.username !== user.username);
    }

}

const user1 = new User('Mario','jdj12#');
const user2 = new User('Hugo','opw12');

//we can even use admin class for creating objects
const adminUser = new Admin('Amdin','admin');

//creating an user object array

let users = [user1, user2, adminUser];
console.log(users); 

//only admin class object has acess to deleteUser func.
adminUser.deleteUser(user1); //deletes user1
//updated users array looks like
/*
(2) [User, Admin]
0: User {username: "Hugo", userpwd: "opw12"}
1: Admin {username: "Amdin", userpwd: "admin"}
length: 2

*/