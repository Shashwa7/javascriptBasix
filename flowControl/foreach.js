let fruits = ['apple', 'orange', 'kiwi'];

//using regular call back func
fruits.forEach(function (fruit) {
    console.log(fruit);
});

//using arraow  func
fruits.forEach(fruit => {
    console.log(fruit);
});

//passing callbackfunction as argument in foreach
let myFriends = ['Chris', 'Shubham', 'Puneet', 'Lavanya'];

const greetYourFriend = (friend, index) => {

    console.log(`${index}: Hello ${friend}`);
};

myFriends.forEach(greetYourFriend);