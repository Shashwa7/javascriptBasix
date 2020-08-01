// so here we're implementing some of the array methods we've learned
/*
basically we have a list of students with their marks enrolled for the university.
So we've to sort them consedering their marks and filter students those have scored over 85 -change the status from 'w'- waiting to 's' -selected and the students who have scored less than 75  change the status from 'w'- waiting to 'r' -rejected.
*/

const applicants = [
    { name: 'shashwat', score: 86, status: 'w' },
    { name: 'joy', score: 81, status: 'w' },
    { name: 'manshi', score: 74, status: 'w' },
    { name: 'gaurav', score: 75.5, status: 'w' },
    { name: 'nicole', score: 91, status: 'w' },
    { name: 'shreyas', score: 69, status: 'w' },
    { name: 'galob', score: 89, status: 'w' }
];

//desc order on the basis of the score
/* applicants.sort((std1, std2) => std2.score - std1.score);
console.log(applicants);


const sortApplicants = applicants.filter(std => std.score > 75);
console.log(sortApplicants);

const rejectedApplicants = applicants.map(std =>{
    if(std.score < 75){
        return {name:std.name, score: std.score, status:(std.status = 'r')};
       }
       else
       return std;
});
console.log(rejectedApplicants);

const selectedApplicants = sortApplicants.map(std => {
    if(std.score > 85){
     return {name:std.name, score: std.score, status:(std.status = 's')};
    }
    else
    return std;
});

console.log(selectedApplicants); */

//we can do all this just in oneliner

//decalre the final varible 

const eligbleApplicants = applicants.filter(std => std.score > 75).map(std => {
    if (std.score > 85)
        return { name: std.name, score: std.score, status: (std.status = 's') };
    else
        return std;
}).sort((std1, std2) => std2.score - std1.score);

console.log(eligbleApplicants);
console.log(applicants);



