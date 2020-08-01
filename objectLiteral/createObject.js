//object literals
let user = {
    //  key     value
    name: 'Shashwat',
    age: 22,
    email: 'shashwa7@yahoo.com',
    location: 'Mumbai,IND',
    cart: ['MIVI aux cable', 'NESCAFE coffee', 'JBL earphone', 'The Alchemist Novel'],

    //arrow function
    purchase: (status) => {
        //incase of arrow function if one wants to display some object key value he must use 'object.key'
        //'this' keyword will not work here
        if (status) {
            console.log(`${user.name} has done the purchase successfully!`);
        }
        else
            console.log(`Purchase Declined!`);
    },

    //regular function
    //displayCartItems: function (){} or use the short hand method as shown below
    displayCartItems() {
        //inorder to use 'this' keyword, the declared function can't be a arrow function it has to be a regular function type

        console.log('User has purchsed: ');
        this.cart.forEach(item => {
            console.log(item);
        });
    }

};

console.log(typeof (user));

console.log(user);

//access data - method 1
console.log(user.name);
//access data -method 2
console.log(user['email']);

//update key value - method 1
user.age = 21;
console.log(user.age);

//udate key value - method 2
user['name'] = 'Shashwa7';
console.log(user.name);

//invoking an object method/function 
user.purchase(true);
user.displayCartItems();