// the reduced fucntion iterates through an array and it performs a callback function on each item in the array but it doesn't necessarily return an updated array at the end of the procedure rather just returns any value that you want based on this original array and the values in it.

/*const scores = [10, 20, 40, 50, 70, 102];
//     order matters:  (intializer, arrItem)
const result = scores.reduce((count, score) =>{

    if(score > 35)
        count++;

    return count;
},0);
// '0' means count = 0;
//reduce takes 2 parameter 1st is cbf(call back function) and other is the value of decalared var/const/let. 

console.log(result); */

//reduced functions are helpful in situations where we have lot of data to calculate and even helpful in calculating specific type of data.

//here is score boad of a game were we have to calculate the total score of mario

const scores = [
    { player: "mario", score: 56 },
    { player: 'shawn', score: 24 },
    { player: 'Ann', score: 32 },
    { player: 'mario', score: 23 },
    { player: "mario", score: 56 },
    { player: 'shawn', score: 24 },
    { player: 'Ann', score: 32 },
    { player: 'mario', score: 23 }
];

const marioTotal = scores.reduce((total, user) => {

    if (user.player === 'mario') {
        total += user.score;
    }

    return total;
}, 0); // total = 0;

console.log('Mario total score: ', marioTotal);



//reducing func exp2--------------------------------------------------------------------------------

const compose = (f, g) => (data) => f(g(data));

const greet = user => {
    console.log(`hello ${user}!`)
    return user + "..1"
};
const talk = user => {
    console.log(`how you doing ${user} ?`)
    return user + "..2"
};
const part = user => {
    console.log(`bye ${user}!`)
    return user + "..3"
}

const allFuncs = (...funcs) => {
    return funcs.reduce(compose); // we are returning data in every func so no need of extra-parameter or initializer
    //it will basically going to cycle through  the 'funcs' array starting from index 0;
    //funcs = [greet(), talk(), part()];
    //greet() => gets the data first, perform some operations and returns the data which is required/passed to other functions and the process repeats itself until every func from the 'funcs' array is executed, finally the end result is returned.

    //look somehat like this
    /*
    og_data: data val to be passed;
    >s1  funcs.reduce(compose) = funcs[0] = greet(og_data) => return data_A; //reduce cycle :1
    >s1  funcs.reduce(compose) = funcs[1] = talk(data_A) => return data_B; //reduce cycle :2
    >s1  funcs.reduce(compose) = funcs[2] = talk(data_B) => return data_C; //reduce cycle :3
    >s1  funcs.reduce(compose) = funcs[3] ; array out of bound!! --reduce func terminates  //reduce cycle :4
    
    */
}

//R -> L execution (1 greet, 2 talk, 3 part)
let mssgLog = allFuncs(part, talk, greet)("mario");
console.log("Mssg Log: ", mssgLog);

