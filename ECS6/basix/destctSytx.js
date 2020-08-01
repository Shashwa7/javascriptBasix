// ES6: Use Destructuring Assignment to Extract Values from Objects

const user = { name: 'John Doe', age: 34 };

//old way
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

//new way 
const { name, age } = user;
// name = 'John Doe', age = 34

//want to use different var nameS
const{name: userName, age: userAge} = user;

//For nested objects
const players = {

    rock:{
        score: 2123,
        level: 21,
        stat: 'pro'
    },

    hugo:{
        score: 59,
        level: 2,
        stat:  'rookie'
    }
};

//fetching hugo data

const {hugo:{score:hugoScore, stat:hugoStat}} = players;
