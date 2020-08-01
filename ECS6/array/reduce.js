//it is very very powerful method

//return statement is must!!!

const score = [1, 22, 31, 7, 12, 5];

const totalScore = score.reduce((total, scr) => {
    return total + scr;
}, 0);
// v
//total = 0; initializing 
//or simply the starting number
// 0 + 1 + 22 + 31 + 7 + 12 + 5;

//if total = 5; then v
//5 + 1 + 22 + 31 + 7 + 12 + 5;

console.log(totalScore);