const scoreBoard = [
    {player: 'mario', score: 2120},
    {player: 'jack', score: 120},
    {player: 'rock', score: 845},
    {player: 'maya', score: 939}  
];

//we want to store this array object in local storage
//before storing this data we must parse it into JSON string

//stringify method 
localStorage.setItem('scoreboard', JSON.stringify(scoreBoard));


//converting back to js array objects
const storedData = localStorage.getItem('scoreboard');
console.log(JSON.parse(storedData)); //array of objects