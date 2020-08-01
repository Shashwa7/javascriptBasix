//filter method iterates through the array and filters out the result as per the defined condition.

//we can't maipulate array values just can fetch value based on some codition

//note: return statement is must!!!

class Player {

    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
};

const player1 = new Player('Hugo', 244122);
const player2 = new Player('Rock', 3952);
const player3 = new Player('Shaun', 9521);
const player4 = new Player('Maya', 121);
const player5 = new Player('Jami', 50382);
const player6 = new Player('Red', 59064);
const player7 = new Player('Xo', 910993);

const players = [player1, player2, player3, player4, player5, player6, player7];

const topScores = players.filter((ply) => {
    if (ply.score > 12000)
        return ply;
});

console.log(topScores)