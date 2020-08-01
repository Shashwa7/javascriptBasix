const playerA= {
    'name': 'Rock',
    'score': 123443,
    'stat': 'Pro'
}

/*
> we can't reinitialise playerA with any other value
>but we can surely manipulte its property like name, score and stat;
*/

playerA = 'hello'; //throws error

// changing name from 'rock' to 'hugo'
playerA.name = 'hugo';
playerA.score = 3234;

let name = playerA.name;
let score = playerA.score;


//one liner for doing the same thing as above;
let {name, score} = playerA;