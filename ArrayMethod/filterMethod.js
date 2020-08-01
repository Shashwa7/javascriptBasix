//filter method
/*
> it can be helpful while retreiving data from DB.
> we want to filter data as per the requirement using some conditons.
> filter method basically iterate through an array and performs a check on each item and If the return value is true- element remains in the resulting array but if the return value is false- the element will be removed for the resulting array.

note:
  >Also take notice filter does not update the existing array it will return a new filtered array every time.
  >using filter you cannot manipulate array elements/data items, just help in filtering out essential data
*/

/*
Basic code;

const scores = [10, 30, 20, 3, 12, 7];

const filteredScores = scores.filter(score => {
    return score > 10; // will return with an array containing scores greater than 10;
});

console.log(filteredScores);  */

//object array
const users = [
    { name: 'Shawn', premium: true },  //object 1
    { name: 'Melisa', premium: false },
    { name: 'Khalid', premium: false },
    { name: 'Cole', premium: true },
    { name: 'Hugo', premium: false }
];

// filtering out just premium users
const primeUsers = users.filter(user => {
    return user.premium; // will return array of user with premium account;
})

console.log(primeUsers);