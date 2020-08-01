/*
sort() has an in built alogo for simply sorting just numbers or strings..
sort() is a desttructive method it changes the origianl data/array/object etc

*/

//example 1-  sorting strings
const names = ['maris', 'shawn', 'yaku', 'boa'];
names.sort();  //increasing oreder
names.reverse(); //reversing the the sorted names-trick to sort in DESC manner
console.log(names); //sorted


//example 2- sorting number
const  scores = [1000, 50, 20, 5, 35, 70, 45];
/*scores.sort(); // it is just sorting on the basis of the msd(most significant digit) value of any number. msd(1000) = 1; msd(45) = 4, msd(5)=5;
console.log(scores); */

//quick fix: compare function 
scores.sort((a, b) => a - b);
console.log(scores); //aesc; for desc: b - a;




//example 3 - sorting objects
const players = [

        {name: 'mario', score: 20},
        {name: 'boa', score: 35},
        {name: 'yaku', score: 47},
        {name: 'shawn', score: 21}
];

//sort() doesn't work with object arrays if implemented directly  because nothing is mentioned what to sort and comparing what?

//firing a cbf which isa compre function- for each consecutive pairs of objects and comparing their scores and sorting them accordingly

/* explanation :
 if returned -1/-ve value -> a comes before b
 if retured +1/+ve value -> b comes before a
 if returned  0 -> no change
*/

/* compare function exp:
The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 : (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

*/
/*
const compare = (a, b) => {
    if(a > b)
        return -1;
    else if(a < b)
        return 1;
    else
        return 0;
}
players.sort((plyr1,plyr2) =>{
    return compare(plyr1.score, plyr2.score);
    /*or directyl
    {
        if(plyr1.score > plyr2.score)
        return -1;
    else if(plyr1.score < plyr2.score)
        return 1;
    else
        return 0;
    }
}); */

//other approach ( 1 - liner ASEC sort)
players.sort((plyr1, plyr2) => plyr1.score - plyr2.score);
console.log(players);

/*desc sort
players.sort((plyr1, plyr2) => plyr2.score - plyr1.score);
console.log(players); */